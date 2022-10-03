import prisma from "../lib/prisma";

// find directly from prisma client
// export const resolvers = {
//     Query: {
//         AllUsersQuery: async () => await prisma.user.findMany(),
//     },
// };

// aggregate count create createMany delete deleteMany findFirst findFirstOrThrow findMany findUnique findUniqueOrThrow groupBy update updateMany upSert

// use context. includes info about who logged in user / db connections
export const resolvers = {
    Query: {
        users: async (_parent: any, __args: any, ctx: any) => await ctx.prisma.user.findMany(),
        user_projects: async (_parent, args, ctx) => await ctx.prisma.project.findMany({ where: { creator_email: args.email }, })
    },


    Mutation: {
        create_user: async (_parent, args, ctx) => {
            const result = await ctx.prisma.user.create({ data: { username: args.username, password: args.password } })
            if (!result)
                return {
                    success: false,
                    message: "failed to create user"
                }
            if (result) {
                return {
                    success: true,
                    message: 'user created: ' + result.username,
                    user: result
                }
            }
        }
    }

};