import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className=" grow flex w-full flex-col items-center ">
      <section className="relative flex grow flex-col items-center w-full max-w-3xl">
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-14">
          Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my
          passion for blending technology, architecture, history, and
          creativity!
        </p>
      </section>
      <Footer />
    </main>
  );
}
