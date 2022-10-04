import { gql } from "apollo-server-micro";


// integrate nextjs, apollo, gql, prisma:
// https://www.youtube.com/watch?v=RJpevpbC4YY&ab_channel=Prisma

export const typeDefs = gql`
    type User {
        id: String
        name: String
        email: String
        # emailVerified: DateTime
        username: String
        password: String
        image: String
        # accounts: [Account]
        # sessions: [Session]
        # created_tasks: [Task]
        # assigned_tasks: [Task]
        # comments: [Comment]
        created_projects: [Project]
    }

    type Project{
        id: String
        title: String!
        url: String
        description: String
        category: String!
        assigned_users: [User] 
        creator_username: String!
        # tasks: [Task] @relation
    }

    # type Task {
    #     id: Int
    #     title: String
    #     description: String
    #     reporter: User

    # }

    type Query {
        users: [User]!
        user_projects(username: String!): [Project]
    }

    type Mutation {
        create_user(username: String!, password: String!): UserCreatedResponse
    }

    type UserCreatedResponse{
        success: Boolean!
        message: String
        user: User
    }


    type ProjectCreatedResponse {
    success: Boolean!
    message: String
    project: Project
  }


`;