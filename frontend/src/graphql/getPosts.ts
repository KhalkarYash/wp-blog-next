import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
    }
  }
`;
