import { gql } from "apollo-server-micro";


// integrate nextjs, apollo, gql, prisma:
// https://www.youtube.com/watch?v=RJpevpbC4YY&ab_channel=Prisma

export const  typeDefs = gql`
    type User {
        id: String
        name: String
        email: String
        # emailVerified: DateTime
        image: String
        # accounts: [Account]
        # sessions: [Session]
        # created_tasks: [Task]
        # assigned_tasks: [Task]
        # comments: [Comment]
        # assigned_projects: [Project]
    }

    type Query {
        users: [User]!
    }
`;