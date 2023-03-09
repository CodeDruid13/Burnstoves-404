import { API_URL, BEARER_TOKEN } from "@api/config/config";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

// @ts-ignore
let apolloClient;

const ENDPOINT = `${API_URL}`;
const TOKEN = `${BEARER_TOKEN}`;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: ENDPOINT,
    headers: { authorization: { TOKEN } ? `Bearer ${TOKEN}` : "" },
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
      watchQuery: { fetchPolicy: "no-cache" },
    },
  });
}

/*
// ApolloClient Singleton
*/
export function initializeApollo(
  // @ts-ignore
  initialState = null,
): ApolloClient<NormalizedCacheObject> {
  // @ts-ignore
  const _apolloClient = apolloClient ?? createApolloClient();

  // if (initialState) {
  //   // Get existing cache, loaded during client side data fetching
  //   const existingCache = _apolloClient.extract();

  //   // Restore the cache using the data passed from
  //   // getStaticProps/getServerSideProps combined with the existing cached data
  //   _apolloClient.cache.restore({ ...existingCache, ...initialState });
  // }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  // @ts-ignore
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(
  initialState: null,
): ApolloClient<NormalizedCacheObject> {
  console.log("initializing Apollo");
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
