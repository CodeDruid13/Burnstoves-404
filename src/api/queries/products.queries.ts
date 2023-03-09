import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts($sort: [String], $filter: ProductFiltersInput) {
    products(sort: $sort, filters: $filter) {
      data {
        id
        attributes {
          product_image {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          product_title
          product_subtitle
          product_type
          product_description
          product_link
          product_images(filters: {}, pagination: {}, sort: []) {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          product_reports {
            id
            report_title
            report_subtitle
            report_icon {
              data {
                attributes {
                  blurhash
                  url
                  alternativeText
                }
              }
            }
          }
          product_logo {
            data {
              attributes {
                blurhash
                url
                alternativeText
              }
            }
          }
          product_video
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_PRODUCTS = gql`
  query getSingleProduct($id: ID) {
    product(id: $id) {
      data {
        attributes {
          product_image {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          product_title
          product_subtitle
          product_type
          product_description
          product_link
          product_images(filters: {}, pagination: {}, sort: []) {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
          product_reports {
            id
            report_title
            report_subtitle
            report_icon {
              data {
                attributes {
                  blurhash
                  url
                  alternativeText
                }
              }
            }
          }
          product_logo {
            data {
              attributes {
                blurhash
                url
                alternativeText
              }
            }
          }
          product_video
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
