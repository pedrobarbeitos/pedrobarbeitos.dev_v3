import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import P01 from "/public/pgsf.png";

export default function Projects() {
  return (
    <main className=" grow flex w-full flex-col items-center ">
      <section className="relative flex grow flex-col items-center w-full max-w-3xl">
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-8 pb-20">
          Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my
          passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of
          my web development adventures. Each project is a byte-sized glimpse
          into my passion for blending technology, architecture, history, and
          creativity!
        </p>
        <Link href="/projects/film-collection">
          <Image
            className="object-contain"
            src={P01}
            width={800}
            height={800}
            alt="Image P01"
            priority
          />
        </Link>
        <Link href="/projects/film-collection">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8">
            Curated film collection
          </h4>
        </Link>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-0 pb-20">
          Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my
          passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of
          my web development adventures. Each project is a byte-sized glimpse
          into my passion for blending technology, architecture, history, and
          creativity!
        </p>

        <Image
          className="object-contain"
          src={P01}
          width={800}
          height={800}
          alt="Image P01"
          priority
        />

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8">
          Architecture studio website
        </h4>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-0 pb-12">
          Welcome to my digital playground, a vibrant collection of my web
          development adventures. Each project is a byte-sized glimpse into my
          passion for blending technology, architecture, history, and
          creativity! Welcome to my digital playground, a vibrant collection of
          my web development adventures. Each project is a byte-sized glimpse
          into my passion for blending technology, architecture, history, and
          creativity!
        </p>
      </section>
      <Footer />
    </main>
  );
}
