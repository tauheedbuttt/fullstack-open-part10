import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { formatNumber } from "../utils/utils";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
  },
  headerDescription: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    gap: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 5,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
});

const RepositoryItem = ({ item }) => {
  const stats = [
    { label: "Stars", value: item.stargazersCount },
    { label: "Forks", value: item.forksCount },
    { label: "Reviews", value: item.reviewCount },
    { label: "Rating", value: item.ratingAverage },
  ].map((item) => ({
    ...item,
    value: formatNumber(item.value),
  }));
  return (
    <View testID="repository-item" style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Image */}
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        {/* Name, description, language */}
        <View style={styles.headerDescription}>
          <Text testID="repository-item-name" fontWeight={"bold"}>
            {item.fullName}
          </Text>
          <Text testID="repository-item-description">{item.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={{ color: "white" }} testID="repository-item-language">
              {item.language}
            </Text>
          </View>
        </View>
      </View>
      {/* Stats */}
      <View style={styles.statsContainer}>
        {stats.map((stat) => (
          <View key={stat.label} style={styles.statItem}>
            <Text
              testID={`repository-item-stat-${stat.label
                .toLocaleLowerCase()
                .replace(/ /g, "-")}`}
              fontWeight="bold"
            >
              {stat.value}
            </Text>
            <Text color="textSecondary">{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RepositoryItem;
