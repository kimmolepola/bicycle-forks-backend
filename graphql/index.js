const { ApolloServer, gql } = require('apollo-server-azure-functions');
const mongoose = require('mongoose');

const previousMapboxFeatureIDSchema = new mongoose.Schema({
  mapboxFeatureID: {
    type: Number,
    required: true,
  },
});

const pointSchema = new mongoose.Schema({
  mapboxFeatureID: {
    type: Number,
    required: true,
    unique: true,
  },
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

const PreviousMapboxFeatureID = mongoose.model('PreviousMapboxFeatureID', previousMapboxFeatureIDSchema);
const Point = mongoose.model('Point', pointSchema);

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Point {
    databaseID: ID!
    mapboxFeatureID: Int!
    title: String!
    category: String
    type: String
    groupID: String
    lng: Float!
    lat: Float!
  }
  type Mutation {
    deletePoint(
      databaseID: ID!
    ): String
    editPoint(
      databaseID: ID!
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
    deletePoint: async (root, args) => {
      await Point.findByIdAndDelete(args.id);
      return 'point deleted';
    },
    editPoint: async (root, args) => {
      await Point.findByIdAndUpdate(args.databaseID, args);
      return 'point edited';
    },
    addPoint: async (root, args) => {
      let { mapboxFeatureID } = await PreviousMapboxFeatureID.findById('609d1f3d303bc71a5458c7d1');
      mapboxFeatureID += 1;
      await PreviousMapboxFeatureID.findByIdAndUpdate('609d1f3d303bc71a5458c7d1', { mapboxFeatureID });
      const point = new Point({ ...args, mapboxFeatureID });
      await point.save();
      return 'point added';
    },
  },
  Query: {
    allPoints: async () => Point.find({}).then((points) => points.map((x) => ({ ...x.toJSON(), databaseID: x.id }))),
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
