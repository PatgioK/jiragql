import { argsToArgsConfig } from "graphql/type/definition";
import prisma from "../lib/prisma";

// find directly from prisma client
export const resolvers = {
    Query: {
        users: async () => await prisma.user.findMany(),
        projects_by_user_email: async (_parent, args, ctx) => await prisma.project.findUnique(creator_email: args.email),
    },
};

// aggregate count create createMany delete deleteMany findFirst findFirstOrThrow findMany findUnique findUniqueOrThrow groupBy update updateMany upSert

// use context. includes info about who logged in user / db connections
// export const resolvers = {
//     Query: {
//         users: async (_parent: any, __args: any, context: any) => await context.prisma.user.findMany(),
//         project_by_user_email: async (_parent, args, context) => await context.prisma.project.findUniqueWhere()
//     },
// };