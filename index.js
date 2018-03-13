import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schemes';
import resolvers from './resolvers';
import axios from 'axios';

const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () =>  {
    console.log(`express is ready in localhost: ${PORT}`);
});