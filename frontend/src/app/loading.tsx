export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto p-6 animate-pulse">
      {/* Header placeholder */}
      <div className="flex justify-center">
        <div className="h-70 w-70 bg-gray-200 dark:bg-neutral-800 rounded-full" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded mt-8 mb-6 w-1/2" />
        <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded mb-10 w-1/3" />
      </div>

      {/* Blog cards placeholders */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="mb-8 space-y-3">
          <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-2/3" />
          <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-5/6" />
          <div className="h-3 bg-gray-200 dark:bg-neutral-800 rounded w-1/4" />
        </div>
      ))}
    </div>
  );
}
