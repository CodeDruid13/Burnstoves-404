import { gql } from "@apollo/client";

export const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation subscribe($data: NewsletterEmailInput!) {
    createNewsletterEmail(data: $data) {
      data {
        id
        attributes {
          email
          createdAt
          updatedAt
        }
      }
    }
  }
`;
