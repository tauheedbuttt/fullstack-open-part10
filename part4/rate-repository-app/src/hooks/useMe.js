import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

const useMe = () => {
  const { data, loading, refetch, error } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
  });
  const me = data?.me;

  return { me, loading, refetch, error };
};

export default useMe;
