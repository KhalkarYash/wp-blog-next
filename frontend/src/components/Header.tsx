import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-8 text-center">
      <div className="flex justify-center">
        <Image
          src="/yash.jpg"
          alt="Yash Khalkar"
          width={300}
          height={300}
          className="rounded-full shadow-lg shadow-gray-600"
        />
      </div>
      <h1 className="text-4xl font-bold mt-8 mb-2">Yash Khalkar</h1>
      <p className="text-gray-600 text-lg">Engineer • Creator • Writer</p>
    </header>
  );
}
