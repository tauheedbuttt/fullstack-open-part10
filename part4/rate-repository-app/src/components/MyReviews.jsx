import { FlatList, StyleSheet } from "react-native";
import useMe from "../hooks/useMe";
import { ItemSeparator } from "./RepositoryList";
import ReviewItem from "./ReviewItem";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 50,
  },
});

const MyReviews = () => {
  const { me, refetch } = useMe();
  const { deleteReview } = useDeleteReview(refetch);
  const reviews = me?.reviews?.edges.map((edge) => edge.node) || [];

  const onDelete = (id) => {
    deleteReview({ variables: { id } });
  };
  return (
    <FlatList
      data={reviews}
      renderItem={({ item, index }) => (
        <>
          {index !== 0 ? null : <ItemSeparator />}
          <ReviewItem key={item.id} review={item} isMe onDelete={onDelete} />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={styles.container}
    />
  );
};

export default MyReviews;
