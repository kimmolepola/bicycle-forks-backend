const { ApolloServer, gql } = require('apollo-server-azure-functions');
const forksStringArray = require('./forks');

exports.hello = () => 'hello';

const forks = () => {
  const headers = forksStringArray[0].split(',');
  const forksObjectArray = [];
  for (i = 1; i < forksArray.length, i++){
    forksObjectArray.push({})
  }
  return (
    forksArray.map({ asdf: 2221 })
  );
};

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    allForks: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    allForks: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
