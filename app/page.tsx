import Link from "next/link";
export default function HomePage() {
  return (
    <div className=" items-center justify-center ">
    <Link href="/tools-stack">Go to ToolStack</Link>

<Link href="/projects">Go to Projects</Link>
<Link href="/case-study">Go to Case Study</Link>
    </div>
  );
}
