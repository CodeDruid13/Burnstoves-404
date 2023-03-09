import { gql } from "@apollo/client";

export const GET_TEAM = gql`
  query getTeam(
    $filters: TeamFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    teams(filters: $filters, sort: $sort, pagination: $pagination) {
      data {
        id
        attributes {
          team_image {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          team_name
          team_position
          team_socials
          team_description
        }
      }
    }
  }
`;

export const GET_SINGLE_TEAM = gql`
  query getTeam($id: ID) {
    team(id: $id) {
      data {
        id
        attributes {
          team_image {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          team_name
          team_position
          team_socials
          team_description
        }
      }
    }
  }
`;
