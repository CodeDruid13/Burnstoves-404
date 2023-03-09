import { gql } from "@apollo/client";

export const GET_APPLIANCEREPORTS = gql`
  query getAppliancesReports($sort: [String]) {
    appliancesreports(sort: $sort) {
      data {
        id
        attributes {
          appliance_image {
            data {
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          appliance_title
          appliance_link
          appliance_description
          reports {
            data {
              id
              attributes {
                report_title
                report_subtitle
                report_icon {
                  data {
                    attributes {
                      url
                      alternativeText
                      blurhash
                    }
                  }
                }
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_REPORT = gql`
  query getSingleApplianceReport($id: ID) {
    appliancesreport(id: $id) {
      data {
        id
        attributes {
          appliance_image {
            data {
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          appliance_title
          appliance_link
          appliance_description
          reports {
            data {
              attributes {
                report_title
                report_subtitle
                report_icon {
                  data {
                    attributes {
                      url
                      alternativeText
                      blurhash
                    }
                  }
                }
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
