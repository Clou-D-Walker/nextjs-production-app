import Link from "next/link";

function AboutPage() {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link
        href="/"
        className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Home Page
      </Link>
    </div>
  );
}

export default AboutPage;
