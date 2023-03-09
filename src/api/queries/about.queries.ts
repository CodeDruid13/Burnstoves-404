import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query getAbout {
    about {
      data {
        id
        attributes {
          about_description
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
