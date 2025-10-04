import { FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import Text from "./Text";
import { ItemSeparator } from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 50,
  },
});

const RepositoryItemView = () => {
  const id = useParams().id;
  const { repository, loading } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;

  const reviews = repository?.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={() => <RepositoryItem item={repository} isDetails />}
      data={reviews}
      renderItem={({ item, index }) => (
        <>
          {index !== 0 ? null : <ItemSeparator />}
          <ReviewItem key={item.id} review={item} />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={styles.container}
    />
  );
};

export default RepositoryItemView;
