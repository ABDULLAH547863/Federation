import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch"; // Use 'node-fetch' instead of 'cross-fetch'

// Define the service URLs
const serviceURLs = {
  users: "http://localhost:4001/graphql",
  posts: "http://localhost:4002/graphql",
  comments: "http://localhost:4003/graphql",
  likes: "http://localhost:4004/graphql",
};

// Create an Apollo Client with an InMemoryCache
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: serviceURLs.users, // You can choose any service URL as the default
    fetch,
  }),
});

// Define a function to set the user's authentication token (if applicable)
const setAuthToken = (token) => {
  client.setLink(
    new HttpLink({
      uri: serviceURLs.users, // Update with the appropriate service URL
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
      fetch,
    })
  );
};

export { client, setAuthToken };
