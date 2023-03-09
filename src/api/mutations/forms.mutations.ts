import { gql } from "@apollo/client";

export const CREATE_CONTACT_FORM = gql`
  mutation contact($data: ContactformInput!) {
    createContactform(data: $data) {
      data {
        id
      }
    }
  }
`;

export const CREATE_DISTRIBUTION_FORM = gql`
  mutation distribution($data: DistributionformInput!) {
    createDistributionform(data: $data) {
      data {
        id
      }
    }
  }
`;

export const CREATE_WARRANTY_FORM = gql`
  mutation warranty($data: WarrantyformInput!) {
    createWarrantyform(data: $data) {
      data {
        id
      }
    }
  }
`;

export const CREATE_REQUEST_FORM = gql`
  mutation warranty($data: RequestFormInput!) {
    createRequestForm(data: $data) {
      data {
        id
      }
    }
  }
`;
