// app/page.tsx
'use client';

import { gql, useQuery } from '@apollo/client';
import client from '../lib/apolloClient';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        slug
        date
      }
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_POSTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts.</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {data.posts.nodes.map((post: any) => (
          <li key={post.slug} className="mb-4">
            <h2 className="text-xl">{post.title}</h2>
            <p>{new Date(post.date).toDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
