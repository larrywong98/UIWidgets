import { gql } from "@apollo/client";

export const load_games = gql`
  query {
    games {
      id
      title
      platform
    }
    authors {
      id
      name
    }
  }
`;
