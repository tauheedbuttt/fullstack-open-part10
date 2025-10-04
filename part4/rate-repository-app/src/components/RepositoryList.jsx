import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";
import OrderBy from "./OrderBy";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

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
  searchKeyword,
  setSearchKeyword,
}) => {
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <View style={{ flexDirection: "row" }}>
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => setSearchKeyword(text)}
            value={searchKeyword}
            style={{ margin: 10, flex: 1 }}
          />
          <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
        </View>
      }
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem key={item.id} item={item} />}
    />
  );
};

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [orderBy, setOrderBy] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });

  const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

  const { repositories } = useRepositories({
    variables: { ...orderBy, searchKeyword: debouncedSearchKeyword },
  });

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
    />
  );
};

export default RepositoryList;
