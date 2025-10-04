import { render, screen, within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../components/RepositoryList";

describe("RepositoryList", () => {
  it("renders repository's name, description, language, forks count, stargazers count, rating average, and review count correctly", () => {
    const repositories = {
      edges: [
        {
          node: {
            id: "jaredpalmer.formik",
            fullName: "jaredpalmer/formik",
            description: "Build forms in React, without the tears 😭 ",
            language: "TypeScript",
            forksCount: 2796,
            stargazersCount: 34315,
            ratingAverage: 90,
            reviewCount: 5,
            ownerAvatarUrl:
              "https://avatars.githubusercontent.com/u/4060187?v=4",
          },
          cursor: "WzE3NTk1ODczMzY1MTUsImphcmVkcGFsbWVyLmZvcm1payJd",
        },
        {
          node: {
            id: "async-library.react-async",
            fullName: "async-library/react-async",
            description: "🍾 Flexible promise-based React data loader",
            language: "JavaScript",
            forksCount: 90,
            stargazersCount: 2148,
            ratingAverage: 72,
            reviewCount: 3,
            ownerAvatarUrl:
              "https://avatars.githubusercontent.com/u/54310907?v=4",
          },
          cursor:
            "WzE3NTk1ODM3MzY1MTUsImFzeW5jLWxpYnJhcnkucmVhY3QtYXN5bmMiXQ==",
        },
        {
          node: {
            id: "rzwitserloot.lombok",
            fullName: "rzwitserloot/lombok",
            description:
              "Very spicy additions to the Java programming language.",
            language: "Java",
            forksCount: 2468,
            stargazersCount: 13290,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              "https://avatars.githubusercontent.com/u/45949248?v=4",
          },
          cursor: "WzE3NTk1ODAxMzY1MTUsInJ6d2l0c2VybG9vdC5sb21ib2siXQ==",
        },
      ],
      pageInfo: {
        endCursor: "WzE3NTk1NTQ5MzY1MTUsInplaXQuc3dyIl0=",
        startCursor: "WzE3NTk1ODczMzY1MTUsImphcmVkcGFsbWVyLmZvcm1payJd",
        hasNextPage: false,
      },
    };
    render(<RepositoryListContainer repositories={repositories} />);

    const repositoryItems = screen.getAllByTestId("repository-item");
    const [firstRepositoryItem] = repositoryItems;

    // verify if the repositories rendered or not
    expect(firstRepositoryItem).toBeDefined();
    expect(repositoryItems.length).toBe(repositories.edges.length);

    // verify the first repository item
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-name")
    ).toHaveTextContent(repositories.edges[0].node.fullName);
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-description")
    ).toHaveTextContent(repositories.edges[0].node.description);
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-language")
    ).toHaveTextContent(repositories.edges[0].node.language);
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-stat-stars")
    ).toHaveTextContent("34.3k");
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-stat-forks")
    ).toHaveTextContent("2.8k");
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-stat-reviews")
    ).toHaveTextContent("5");
    expect(
      within(firstRepositoryItem).getByTestId("repository-item-stat-rating")
    ).toHaveTextContent("90");
  });
});
