const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post @key(fields: "id") {
    id: ID!
    content: String!
    author: User
  }

  type Query {
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(content: String!, authorId: ID!): Post
  }
`;

module.exports = typeDefs;
