import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";
import OrderBy from "./OrderBy";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.separator,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
}) => {
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
      }
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const { repositories } = useRepositories({ variables: orderBy });

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
};

export default RepositoryList;
