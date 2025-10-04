import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://102284d8bbac.ngrok-free.app/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
