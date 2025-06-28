export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto p-6 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-neutral-800 rounded mb-4 w-3/4" />
      <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded mb-2 w-1/3" />
      <div className="space-y-3 mt-6">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-full"
          />
        ))}
        <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-5/6" />
      </div>
    </div>
  );
}
