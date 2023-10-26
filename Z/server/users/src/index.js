const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const typeDefs = require("./schema");
const User = require("../models/User"); // Import your User model

const resolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      try {
        // Retrieve a user by their ID from MongoDB
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error(`Failed to fetch user: ${error.message}`);
      }
    },
  },
  Mutation: {
    createUser: async (parent, { username, email }) => {
      try {
        // Create a new user document in MongoDB
        const newUser = new User({ username, email });
        const user = await newUser.save();
        return user;
      } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
      }
    },
  },
  User: {
    __resolveReference: async (user, args) => {
      // Resolve a User reference using the provided user ID
      try {
        const resolvedUser = await User.findById(user.id);
        return resolvedUser;
      } catch (error) {
        throw new Error(`Failed to resolve User reference: ${error.message}`);
      }
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: ({ req }) => {
    // You can add context for authentication, authorization, etc.
  },
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`User service ready at ${url}`);
});
