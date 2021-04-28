const { ApolloServer, gql } = require('apollo-server-azure-functions');
const points = require('./points');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Mutation {
    addPoint(
      point: String!
    ): String
  }
  type Query {
    allPoints: String
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Mutation: {
    addPoint: async (root, args) => {
      console.log('start');
      await new Promise((r) => setTimeout(r, 3000));
      const newPoint = JSON.parse(args.point);
      console.log('Mutation "addPoint": ', newPoint);
      newPoint.id = points.data.previousFeatureId + 1;
      points.data.previousFeatureId = newPoint.id;
      points.data.features.push(newPoint);
      console.log('finish');
      return 'backend ok';
    },
  },
  Query: {
    allPoints: () => JSON.stringify(points),
    hello: () => 'hello',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
