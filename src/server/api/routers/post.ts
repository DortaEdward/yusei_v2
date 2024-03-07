/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { z } from "zod";
// import data from "../../../data/data.json";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .query(async ({ctx}) => {
  //     try {
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //       await ctx.db.card.createMany({
  //         data: data
  //       })
  //     } catch (error) {
  //       console.error("Error seeding db: ", error.message)
  //     }
  //     return {
  //       greeting: `Hello`,
  //     };
  //   }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
