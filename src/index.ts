import 'reflect-metadata'
import { ApolloServer } from "apollo-server-express";
import * as express from 'express'
import { buildSchema, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
    @Query(() => String, {nullable: true})
    async helloWorld() {
        return 'Hello World'
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    })

    const apolloServer = new ApolloServer({ schema })

    const app = express()

    apolloServer.applyMiddleware({app})

    const PORT = 4001

    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}/graphql`);
    })
}

main()