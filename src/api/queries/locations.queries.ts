import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query getbuyLocations($sort: [String], $filter: BuyLocationFiltersInput) {
    buyLocations(sort: $sort, filters: $filter) {
      data {
        id
        attributes {
          country
          shops(filters: {}, pagination: {}, sort: []) {
            id
            purchase_image {
              data {
                attributes {
                  url
                  alternativeText
                  blurhash
                }
              }
            }
            purchase_title
            Type
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
