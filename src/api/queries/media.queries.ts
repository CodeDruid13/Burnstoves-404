import { gql } from "@apollo/client";

export const GET_NEWSLETTERS = gql`
  query getnewsletters($sort: [String]) {
    newsletters(sort: $sort) {
      data {
        id
        attributes {
          newsletter_title
          newsletter_description
          newsletter_excerpt
          newsletter_image {
            data {
              id
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          newsletter_date
          newsletter_description
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_RESEARCH = gql`
  query getresearch($sort: [String]) {
    researches(sort: $sort) {
      data {
        id
        attributes {
          research_title
          research_excerpt
          research_date
          research_image {
            data {
              id
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          research_description
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_NEWSROOM = gql`
  query getnewsrooms($sort: [String]) {
    newsrooms(sort: $sort) {
      data {
        id
        attributes {
          newsroom_image {
            data {
              id
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          newsroom_title
          newsroom_excerpt
          newsroom_date
          newsroom_description
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
