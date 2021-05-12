const { UserInputError, ApolloServer, gql } = require('apollo-server-azure-functions');
const mongoose = require('mongoose');
const points = require('./points');

const pointSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  type: {
    type: String,
  },
  groupID: {
    type: String,
  },
  lng: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
});

const Point = mongoose.model('Point', pointSchema);

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Point {
    id: ID!
    title: String!
    category: String
    type: String
    groupID: String
    lng: Float!
    lat: Float!
  }
  type Mutation {
    deletePoint(
      id: ID!
    ): String
    editPoint(
      id: ID!
      title: String
      category: String
      type: String
      groupID: String
      lng: Float!
      lat: Float!
    ): String
    addPoint(
      title: String!
      category: String
      type: String
      groupID: String
      lng: Float!
      lat: Float!
    ): String
  }
  type Query {
    allPoints: [Point!]!
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Mutation: {
    deletePoint: (root, args) => {
      console.log('before: ', points);
      console.log('args: ', args);
      // points.features = points.features.filter((x) => x.id.toString() !== args.id);
      console.log('after: ', points);
      return 'point deleted';
    },
    editPoint: (root, args) => {
      console.log('edit args: ', args);
      const featureToEdit = points.features.find((x) => x.id === args.id);
      featureToEdit.lng = args.lng;
      featureToEdit.lat = args.lat;
      featureToEdit.title = args.title;
      featureToEdit.category = args.category;
      featureToEdit.type = args.type;
      featureToEdit.groupID = args.groupID;
      console.log('edited, points: ', points);
      return 'point edited';
    },
    addPoint: async (root, args) => {
      const point = new Point({ ...args });
      try {
        await point.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      }
      return 'point added';
    },
  },
  Query: {
    allPoints: () => Point.find({}),
    hello: () => 'hello',
  },
};

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
