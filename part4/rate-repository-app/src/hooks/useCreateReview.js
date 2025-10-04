import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { CREATE_REVIEW } from "../graphql/mutations";
import { Alert } from "react-native";

const useCreateReview = () => {
  const navigate = useNavigate();
  const [createReview, { data, loading, refetch, error }] = useMutation(
    CREATE_REVIEW,
    {
      onError: (error) => {
        // console.log("Error during creation:", error);
        Alert.alert(
          "Error",
          "Could not create review. Please check the form and try again."
        );
      },
      onCompleted: async (data) => {
        navigate(`/${data.createReview.repositoryId}`);
      },
    }
  );

  return { data, loading, refetch, error, createReview };
};

export default useCreateReview;
