const { gql } = require("apollo-server");

const typeDefs = gql`
  type Comment @key(fields: "id") {
    id: ID!
    text: String!
    author: User
  }

  type Query {
    getComment(id: ID!): Comment
  }

  type Mutation {
    createComment(text: String!, authorId: ID!, postId: ID!): Comment
  }
`;

module.exports = typeDefs;
