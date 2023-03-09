import { API_URL } from "@api/config/config";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const ENDPOINT = `${API_URL}`;

const httpLink = createHttpLink({
  uri: ENDPOINT,
  credentials: "include",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
