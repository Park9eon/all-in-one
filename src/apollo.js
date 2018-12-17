'use strict';

const {ApolloServer, gql} = require('apollo-server-hapi');
const {json} = require('./logger');
const Food = require('./models/Food');

// language=GraphQL
const typeDefs = gql`
    type Food {
    id: ID
    name: String
    kcal: Float
    }

    type Query {
    foods: [Food]
    }

    type Mutation {
    food(name: String  kcal: Float): Food
    }
`;

const resolvers = {
    Query: {
        foods: () => {
            return Food.find();
        },
    },
    Mutation: {
        food: (root, {name, kcal}) => {
            return Food.create({name, kcal});
        }
    }
};

const options = {
    typeDefs,
    resolvers,
    formatError: (err) => {
        json('error', err);
        return err;
    },
    formatResponse: res => {
        json('info', res);
        return res;
    },
};

module.exports = async (app) => {
    const apolloServer = new ApolloServer(options);
    await apolloServer.applyMiddleware({app});
    await apolloServer.installSubscriptionHandlers(app.listener);
};
