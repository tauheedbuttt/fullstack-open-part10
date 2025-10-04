import { useMutation } from "@apollo/client";
import { Alert } from "react-native";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = (refetch) => {
  const [deleteReview, { data, loading, error }] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      // console.log("Error during deletion:", error);
      Alert.alert("Error", "Could not delete review. Please try again later.");
    },
    onCompleted: (data) => {
      refetch();
    },
  });

  return { data, loading, error, deleteReview };
};

export default useDeleteReview;
