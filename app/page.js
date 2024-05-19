import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Home Page</h1>
      <Link href="/client" className="btn btn-accent">
        Client page
      </Link>
    </div>
  );
}

// we must export the page as default
export default page;
