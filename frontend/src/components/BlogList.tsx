import BlogCard from './BlogCard';

type Blog = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <section>
      <div className='text-center flex justify-center text-3xl font-bold'>
        Blogs
      </div>
      {blogs.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          slug={post.slug}
          date={post.date}
        />
      ))}
    </section>
  );
}
