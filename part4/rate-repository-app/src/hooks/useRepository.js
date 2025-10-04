import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, loading, refetch, error, fetchMore } = useQuery(
    GET_REPOSITORY,
    {
      variables: { id },
      fetchPolicy: "cache-and-network",
    }
  );
  const repository = data?.repository;

  const handleFetchMore = () => {
    const canFetchMore = !loading && repository?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        id,
        after: repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return { repository, loading, refetch, error, fetchMore: handleFetchMore };
};

export default useRepository;
