const { ApolloServer } = require("apollo-server");
const { ApolloGateway, IntrospectAndCompose } = require("@apollo/gateway");
const connectToDatabase = require("../../db/db"); // Import your db.js file

const startServer = async () => {
  await connectToDatabase(); // Call the function to establish the database connection

  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: "users", url: "http://localhost:4001/graphql" },
        { name: "posts", url: "http://localhost:4002/graphql" },
        { name: "comments", url: "http://localhost:4003/graphql" },
        { name: "likes", url: "http://localhost:4004/graphql" },
      ],
    }),
  });

  const server = new ApolloServer({
    gateway,
    subscriptions: false, // Enable if you plan to use subscriptions
  });

  server.listen().then(({ url }) => {
    console.log(`Gateway service ready at ${url}`);
  });
}

startServer(); // Call the async function to start the server