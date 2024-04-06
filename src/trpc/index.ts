import { z } from 'zod';
import { authRouter } from './auth-router';
import { publicProcedure, router } from './trpc';
import { QueryValidator } from '../lib/validators/query-validator';
import { getPayloadClient } from '../get-payload';
import { paymentRouter as payment } from './payment-router';

export const appRouter = router({
	authRouter,
	payment,
	getInfiniteProducts: publicProcedure
		.input(
			z.object({
				limit: z.number().min(1).max(100),
				cursor: z.number().nullish(),
				query: QueryValidator,
			})
		)
		.query(async ({ input }) => {
			const { query, cursor } = input;
			const { sort, limit, filterProduct, ...queryOpts } = query;

			const payload = await getPayloadClient();

			const parsedQueryOpts: Record<string, { equals: string }> = {};

			Object.entries(queryOpts).forEach(([key, value]) => {
				parsedQueryOpts[key] = {
					equals: value,
				};
			});

			const page = cursor || 1;

			const {
				docs: unfilteredItems,
				hasNextPage,
				nextPage,
			} = await payload.find({
				collection: 'products',
				where: {
					approvedForSale: {
						equals: 'approved',
					},
					...parsedQueryOpts,
				},
				sort,
				depth: 1,
				limit,
				page,
			});

			let items = unfilteredItems.filter((item) => item.id !== filterProduct);

			return {
				items,
				nextPage: hasNextPage ? nextPage : null,
			};
		}),
});

export type AppRouter = typeof appRouter;
