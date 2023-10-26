const { gql } = require("apollo-server");

const typeDefs = gql`
  # Types and Queries
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Post {
    id: ID!
    content: String!
    author: User!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
  }

  type Like {
    id: ID!
    user: User!
    post: Post!
  }

  type Query {
    getUser(id: ID!): User
    getPost(id: ID!): Post
    getComment(id: ID!): Comment
    getLike(id: ID!): Like
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    createPost(content: String!, authorId: ID!): Post
    createComment(text: String!, authorId: ID!, postId: ID!): Comment
    createLike(userId: ID!, postId: ID!): Like
  }

  # Gateway-specific Query
  type Query {
    # Gateway-specific queries can be defined here
  }
`;

module.exports = typeDefs;
