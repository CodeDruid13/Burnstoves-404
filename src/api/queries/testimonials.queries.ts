import { gql } from "@apollo/client";

export const GET_TESTIMONIALS = gql`
  query getTestimonials($sort: [String], $filters: TestimonialFiltersInput) {
    testimonials(sort: $sort, filters: $filters) {
      data {
        id
        attributes {
          testimonial_user_image {
            data {
              attributes {
                url
                alternativeText
                blurhash
              }
            }
          }
          testimonial_product_title
          testimonial_description
          testimonial_user_name
          testimonial_user_location
          validated
          type
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

export const GET_SINGLE_TESTIMONIAL = gql`
  query getTestimonial($id: ID) {
    testimonial(id: $id) {
      data {
        id
        attributes {
          testimonial_user_image {
            data {
              id
              attributes {
                alternativeText
                url
                blurhash
              }
            }
          }
          testimonial_product_title
          testimonial_description
          testimonial_user_name
          testimonial_user_location
          createdAt
        }
      }
    }
  }
`;
