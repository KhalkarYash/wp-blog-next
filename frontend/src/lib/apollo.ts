import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://blog-backend-yashkhalkar.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
