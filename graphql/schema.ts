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
        created_tasks: [Task]
        assigned_tasks: [Task]
        comments: [Comment]
        created_projects: [Project]
    }

    type Project{
        id: String
        title: String!
        url: String
        description: String
        category: String!
        assigned_users: [User] 
        creator: User
        creator_username: String!
        tasks: [Task]
    }

    type Task {
        id: Int
        title: String
        description: String
        reporter: User
        reporterusername: String
        priority: String!
        status: String!
        issue_type: String!
        assignees: [User]
        comments: [Comment]
        project: Project!
        projectId: String
    }

    type Comment {
        id: String
        user: User
        commenterUsername: String
        task: Task
        taskId: String
        comment: String
    }

    type Query {
        users: [User]!
        user_projects(username: String!): [Project]
    }

    type Mutation {
        create_user(username: String!, password: String!): User
        create_project(title: String!, description: String, url: String, category: String!, creator_username: String!): Project
        create_task(title: String!, description: String, reporterusername: String!, priority: String!, status: String!, issue_type: String!, projectId: String!)
    }

    # type UserCreatedResponse{
    #     success: Boolean!
    #     message: String
    #     # user: User
    # }


    type ProjectCreatedResponse {
    success: Boolean!
    message: String
    project: Project
  }


`;