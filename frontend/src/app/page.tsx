import Header from '@/components/Header';
import BlogList from '@/components/BlogList';
import { GET_POSTS } from '@/graphql/getPosts';
import client from '@/lib/apollo';

export default async function HomePage() {
  const { data } = await client.query({ query: GET_POSTS });

  const posts = data?.posts?.nodes || [];

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Header />
      <BlogList blogs={posts} />
    </main>
  );
}
