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
        user_projects: async (_parent: any, args: any, ctx: any) => await ctx.prisma.project.findMany({ where: { creator_username: args.creator_username }, })
    },


    Mutation: {
        create_user: async (_parent: any, args: any, ctx: any) => {
            const result = await ctx.prisma.user.create({ data: { username: args.username, password: args.password } })
            // if (!result)
            //     return {
            //         success: false,
            //         message: "failed to create user"
            //     }
            // if (result) {
            //     return {
            //         success: true,
            //         message: 'user created: ' + result.username,
            //         // user: result
            //     }
            // }
        },

        create_project: async (_parent: any, args: any, ctx: any) => {
            const result = await ctx.prisma.project.create({ data: {
                creator_username: args.creator_username,
                title: args.title, 
                description: args.description, 
                url: args.url, 
                category: args.category, }})
        },

        create_task: async (_parent: any, args: any, ctx: any ) => {
            const result = await ctx.prisma.task.create({ data: {
                title: args.title,
                description: args.description,
                reporterusername: args.reporterusername,
                priority: args.priority,
                status: args.status,
                issue_type: args.issue_type,
                assignees: args.assignees,
                projectId: args.projectId,
            }})
        },
    }

};