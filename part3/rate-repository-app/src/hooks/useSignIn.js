import { useApolloClient, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [signIn, { data, loading, refetch, error }] = useMutation(
    AUTHENTICATE,
    {
      onError: (error) => {
        console.log("Error during authentication:", error);
      },
      onCompleted: async (data) => {
        const accessToken = data.authenticate.accessToken;
        await authStorage.setAccessToken(accessToken);
        navigate("/");
        apolloClient.resetStore();
      },
    }
  );

  return { data, loading, refetch, error, signIn };
};

export default useSignIn;
