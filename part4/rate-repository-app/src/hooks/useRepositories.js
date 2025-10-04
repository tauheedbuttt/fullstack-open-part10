import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading, refetch, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  const repositories = data?.repositories;

  return { repositories, loading, refetch, error };
};

export default useRepositories;
