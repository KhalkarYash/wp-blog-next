import client from "@/lib/apollo";
import { GET_POST_BY_SLUG } from "@/graphql/getPostBySlug";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  return {
    title: `${data.post.title} | Yash Khalkar`,
    description: `Read: ${data.post.title}`,
    openGraph: {
      title: data.post.title,
      description: `Posted by ${data.post.author.node.name}`,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  const post = data?.post;

  if (!post) return notFound();

  return (
    <article className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500">
        By {post.author?.node?.name} on {new Date(post.date).toDateString()}
      </p>
      <div
        className="mt-6 prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
