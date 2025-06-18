import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://blog.local/graphql",
  cache: new InMemoryCache(),
});

export default client;
