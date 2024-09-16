import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://ваш-graphql-api.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
