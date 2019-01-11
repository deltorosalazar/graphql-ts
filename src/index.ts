import 'reflect-metadata'
import { ApolloServer } from "apollo-server-express";
import * as express from 'express'
import { buildSchema } from "type-graphql";
import { createConnection } from 'typeorm';
import { RegisterResolver } from './modules/user/Register'

const main = async () => {
    await createConnection()

    const schema = await buildSchema({
        resolvers: [RegisterResolver]
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