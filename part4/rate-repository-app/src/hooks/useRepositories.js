import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ variables }) => {
  const { data, loading, refetch, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });
  const repositories = data?.repositories;

  return { repositories, loading, refetch, error };
};

export default useRepositories;
