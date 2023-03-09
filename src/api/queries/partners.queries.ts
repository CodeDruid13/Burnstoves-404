import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
  query getPartners($sort: [String]) {
    partners(sort: $sort) {
      data {
        id
        attributes {
          partner_image {
            data {
              attributes {
                blurhash
                url
                alternativeText
              }
            }
          }
          partner_name
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_PARTNER = gql`
  query getPartner($id: ID) {
    partner(id: $id) {
      data {
        id
        attributes {
          partner_image {
            data {
              attributes {
                blurhash
                url
                alternativeText
              }
            }
          }
          partner_name
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
