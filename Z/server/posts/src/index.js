const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    getPost: (parent, { id }) => {
      // Your logic to retrieve a post by ID
    },
  },
  Mutation: {
    createPost: (parent, { content, authorId }) => {
      // Your logic to create a new post
    },
  },
  Post: {
    author: (post, args, context) => {
      // Your logic to fetch the author of the post
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: ({ req }) => {
    // You can add context for authentication, authorization, etc.
  },
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`Post service ready at ${url}`);
});
