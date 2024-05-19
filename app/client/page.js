"use client";
import { useState } from "react";

function ClientPage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">
        {count}
        <button
          className="btn m-4 btn-primary"
          onClick={() => setCount(count + 1)}
        >
          increase
        </button>
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          decrease
        </button>
      </h1>
    </div>
  );
}

export default ClientPage;
