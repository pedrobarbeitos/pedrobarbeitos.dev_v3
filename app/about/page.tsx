import BackImage from "@/components/BackImage";
import Footer from "@/components/Footer";
import A01 from "/public/01A.jpg";
import B01 from "/public/01B.jpg";

export default function About() {
  return (
    <main className=" grow flex w-full flex-col items-center">
      <section className="flex grow w-full">
        <BackImage imageOne={A01} imageTwo={B01} />
      </section>
      <Footer />
    </main>
  );
}