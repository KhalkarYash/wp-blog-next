import { gql } from '@apollo/client';

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      author {
        node {
          name
        }
      }
    }
  }
`;
