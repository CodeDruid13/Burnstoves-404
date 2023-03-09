import { gql } from "@apollo/client";

export const GET_AWARDS = gql`
  query getAwards($sort: [String], $filters: AwardFiltersInput) {
    awards(sort: $sort, filters: $filters) {
      data {
        id
        attributes {
          award_title
          award_subtitle
          award_image {
            data {
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
          award_date
          award_description
          createdAt
          updatedAt
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;

export const GET_SINGLE_AWARD = gql`
  query getSingleaward($id: ID) {
    award(id: $id) {
      data {
        id
        attributes {
          award_title
          award_subtitle
          award_image {
            data {
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
          award_date
          award_description
          createdAt
          updatedAt
          publishedAt
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;
