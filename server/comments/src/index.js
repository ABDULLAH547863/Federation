const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    getComment: (parent, { id }) => {
      // Your logic to retrieve a comment by ID
    },
  },
  Mutation: {
    createComment: (parent, { text, authorId, postId }) => {
      // Your logic to create a new comment
    },
  },
  Comment: {
    author: (comment, args, context) => {
      // Your logic to fetch the author of the comment
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: ({ req }) => {
    // You can add context for authentication, authorization, etc.
  },
});

server.listen({ port: 4003 }).then(({ url }) => {
  console.log(`Comment service ready at ${url}`);
});
