import { gql } from "@apollo/client";

export const query = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        count
        next
        prev
        pages
      }
      results {
        id
        name
        gender
        species
        image
      }
    }
  }
`;
