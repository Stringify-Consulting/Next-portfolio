import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 pt-4 bg-[#090707] text-center text-white flex flex-col gap-8">
        <Link href="/recent-project">ProjectCard</Link>
        <Link href="/proficient-areas">Proficient Areas</Link>
        <Link href="/about-me">About Me</Link>
        <Link href="/tantalizer">Tantalizer</Link>

    </div>
  
  );
}
