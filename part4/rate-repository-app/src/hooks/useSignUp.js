import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { SIGN_UP } from "../graphql/mutations";
import { Alert } from "react-native";

const useSignUp = () => {
  const navigate = useNavigate();
  const [signUp, { data, loading, refetch, error }] = useMutation(SIGN_UP, {
    onError: (error) => {
      console.log("Error during sign up:", error);
      Alert.alert("Sign Up Error", error.message);
    },
    onCompleted: async (data) => {
      navigate("/sign-in");
    },
  });

  return { data, loading, refetch, error, signUp };
};

export default useSignUp;
