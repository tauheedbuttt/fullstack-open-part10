import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const createApolloClient = (authStorage) => {
  const httpLink = createHttpLink({
    uri: Constants.expoConfig.extra.APOLLO_URI,
  });

  const cache = new InMemoryCache({
    typePolicies: {
      Query: { fields: { repositories: relayStylePagination() } },
      Repository: { fields: { reviews: relayStylePagination() } },
    },
  });

  const authLink = setContext(async (_, { headers }) => {
    try {
      const token = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    } catch (e) {
      console.log("Error getting auth token:", e);
      return { headers };
    }
  });

  return new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
  });
};

export default createApolloClient;
