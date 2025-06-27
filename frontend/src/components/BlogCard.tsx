import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
};

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block border-b py-6 hover:bg-gray-50 transition p-4 rounded-2xl"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p
        className="text-gray-600 text-sm mt-1"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <p className="text-sm text-gray-400 mt-2">
        {new Date(date).toDateString()}
      </p>
    </Link>
  );
}
