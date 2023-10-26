const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type User @key(fields: "id") {
    id: ID! @external
    username: String @external
    email: String @external
  }
`;

module.exports = typeDefs;
