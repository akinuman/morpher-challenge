import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  getStock: publicProcedure.query(async ({ ctx }) => {
    const example = await ctx.prisma.example.findFirst();
    return example;
  }),
  increment: publicProcedure.mutation(async ({ ctx, input }) => {
    const stock = await ctx.prisma.example.findFirst();
    if (!stock) {
      await ctx.prisma.example.create({
        data: {
          stockCount: 0,
        },
      });
    } else {
      await ctx.prisma.example.update({
        where: {
          id: stock.id,
        },
        data: {
          stockCount: stock.stockCount + 1,
        },
      });
    }
  }),
  reset: publicProcedure.mutation(async ({ ctx }) => {
    const stock = await ctx.prisma.example.findFirst();
    if (!stock) {
      await ctx.prisma.example.create({
        data: {
          stockCount: 0,
        },
      });
    } else {
      await ctx.prisma.example.update({
        where: {
          id: stock.id,
        },
        data: {
          stockCount: 0,
        },
      });
    }
  }),
});
