import { z } from "zod";
import data from "../../../data/data.json";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const cardRouter = createTRPCRouter({
  getCards: publicProcedure
    .input(z.object(
      {
        limit: z.number().default(30).nullish(),
        offset: z.number().default(0).nullish(),
      })
    )
    .query(async ({ ctx, input }) => { 
      const {limit, offset} = input
      try {
        const cards = await ctx.db.Card.findMany({
        skip:offset,
        take:limit,
      })
      return {
        cards
      };
      } catch (error) {
        console.error("Error getting cards: ", error.message)
      }
      return {
        cards:null
      };
    }),

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
