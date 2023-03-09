import { gql } from "@apollo/client";

export const GET_BANNERS = gql`
  query pageBanners($filters: PageBannerFiltersInput) {
    pageBanners(filters: $filters) {
      data {
        id
        attributes {
          page_name
          page_banner(filters: {}) {
            page_title
            page_subtitle
            page_image {
              data {
                attributes {
                  blurhash
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
