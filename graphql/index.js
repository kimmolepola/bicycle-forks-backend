const { ApolloServer, gql } = require('apollo-server-azure-functions');

const { forks: forkStringArray, headers: headersStringArray } = require('./forks');

const headers = () => {
  const headerObjectsArray = [];
  const headerIds = headersStringArray[0].split(',');
  const headerNames = headersStringArray[1].split(',');
  const headerTypes = headersStringArray[2].split(',');
  for (let i = 0; i < headerIds.length; i += 1) {
    headerObjectsArray.push({ id: headerIds[i], name: headerNames[i], type: headerTypes[i] });
  }
  return headerObjectsArray;
};

const forks = () => {
  const headerIds = headersStringArray[0].split(',');
  const forkObjectArray = [];
  for (let i = 0; i < forkStringArray.length; i += 1) {
    const forkArray = forkStringArray[i].split(',');
    const forkObject = {};
    for (let ii = 0; ii < headerIds.length; ii += 1) {
      forkObject[headerIds[ii]] = forkArray[ii];
    }
    forkObjectArray.push(forkObject);
  }
  return (
    forkObjectArray
  );
};

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    forkListHeaders: String
    allForks: String
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    forkListHeaders: () => JSON.stringify(headers()),
    allForks: () => JSON.stringify(forks()),
    hello: () => 'hello',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
