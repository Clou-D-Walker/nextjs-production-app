import Link from "next/link";

function AboutInfoPage() {
  return (
    <div>
      <h1 className="text-7xl">About {"->"} Info Page</h1>
      <Link
        href="/"
        className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Home Page
      </Link>
      <Link
        href="/about"
        className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        About Page
      </Link>
    </div>
  );
}

export default AboutInfoPage;
