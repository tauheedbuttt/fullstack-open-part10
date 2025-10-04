import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const createApolloClient = (authStorage) => {
  const httpLink = createHttpLink({
    uri: Constants.expoConfig.extra.APOLLO_URI,
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
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};

export default createApolloClient;
