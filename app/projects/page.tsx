import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className=" grow flex w-full flex-col items-center">
      <section className="flex grow">
        <Link href="/projects/film-collection">Film collection</Link>
      </section>
      <Footer />
    </main>
  );
}
