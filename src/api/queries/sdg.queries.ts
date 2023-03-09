import { gql } from "@apollo/client";

export const GET_SDG = gql`
  query getSustainableDevelopmentGoals(
    $filters: SustainableDevelopmentGoalFiltersInput
    $sort: [String]
  ) {
    sustainableDevelopmentGoals(filters: $filters, sort: $sort) {
      data {
        id
        attributes {
          sdg_image {
            data {
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          sdg_title
          sdg_subtitle
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_SDG = gql`
  query getSustainableDevelopmentGoal($id: ID) {
    sustainableDevelopmentGoal(id: $id) {
      data {
        id
        attributes {
          sdg_image {
            data {
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          sdg_title
          sdg_subtitle
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
