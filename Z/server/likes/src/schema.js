const { gql } = require('apollo-server');

const typeDefs = gql`
  type Like @key(fields: "id") {
    id: ID!
    user: User
    post: Post
  }

  type Query {
    getLike(id: ID!): Like
  }

  type Mutation {
    createLike(userId: ID!, postId: ID!): Like
  }
`;

module.exports = typeDefs;
