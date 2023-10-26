const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    getLike: (parent, { id }) => {
      // Your logic to retrieve a like by ID
    },
  },
  Mutation: {
    createLike: (parent, { userId, postId }) => {
      // Your logic to create a new like
    },
  },
  Like: {
    user: (like, args, context) => {
      // Your logic to fetch the user who liked the post
    },
    post: (like, args, context) => {
      // Your logic to fetch the post that was liked
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: ({ req }) => {
    // You can add context for authentication, authorization, etc.
  },
});

server.listen({ port: 4004 }).then(({ url }) => {
  console.log(`Like service ready at ${url}`);
});
