import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import { createContext } from "../../graphql/context";

// apollo server redirects to apollo studio, so we need cors to go to apollo playground
import Cors from 'micro-cors';

// wrap handler in cors
const cors = Cors()


const apolloServer = new ApolloServer({ typeDefs, resolvers, context:createContext});

// apollosever 3 and up requires start server
const startServer = apolloServer.start()


// make into nextjs endpoint
export default cors(async function handler(req, res) {
    if(req.method === "OPTIONS") {
        res.end();
        return false;
    }

    await startServer;

    // specify path of server
    await apolloServer.createHandler({
        path:'/api/graphql'
    }) (req,res)
})

// Disable body parsing, done by default by graphql.
// Nextjs specific
export const config = {
    api:{
        bodyParser: false,
    }
}