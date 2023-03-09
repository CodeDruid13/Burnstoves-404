import { gql } from "@apollo/client";

export const GET_IMPACTS = gql`
  query getImpacts($sort: [String]) {
    impacts(sort: $sort) {
      data {
        id
        attributes {
          impact_image {
            data {
              id
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          impact_title
          impact_subtitle
          impact_suffix
          impact_meta
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const HOMEPAGE_QUERY = `query getImpacts($sort: [String]) {
    impacts(sort: $sort) {
      data {
        id
        attributes {
          impact_image {
            data {
              id
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          impact_title
          impact_subtitle
          impact_suffix
          impact_meta
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }`;
