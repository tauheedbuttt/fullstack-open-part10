import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { Alert } from "react-native";
import AuthStorage from "../utils/authStorage";

const useSignIn = () => {
  const authStorage = new AuthStorage();
  const [signIn, { data, loading, refetch, error }] = useMutation(
    AUTHENTICATE,
    {
      onError: (error) => {
        console.log("Error during authentication:", error);
      },
      onCompleted: async (data) => {
        const accessToken = data.authenticate.accessToken;
        const user = data.authenticate.user;
        Alert.alert("Sign In Successful", `Welcome, ${user.username}!`);
        await authStorage.setAccessToken(accessToken);
      },
    }
  );

  return { data, loading, refetch, error, signIn };
};

export default useSignIn;
