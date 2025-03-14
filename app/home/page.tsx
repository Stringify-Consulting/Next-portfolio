"use client"; // Ensure this is at the top

import { useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const [count, setCount] = useState(0); // Example useState usage

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome</h1>
      <Link href="/tools-stack">Go to ToolStack</Link>

      <Link href="/projects">Go to Projects</Link>
    </div>
  );
};

export default HomePage;
