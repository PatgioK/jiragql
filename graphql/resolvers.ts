// import prisma from "../lib/prisma";

// find directly from prisma client
// export const resolvers = {
//     Query: {
//         users: async () => await prisma.user.findMany(),
//     },
// };

// use context. includes info about who logged in user / db connections
export const resolvers = {
    Query: {
        users: async (_parent: any, __args: any, context: any) => await context.prisma.user.findMany(),
    },
};