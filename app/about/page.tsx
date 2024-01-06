"use client";

import React, { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <main className=" grow flex w-full flex-col items-center">
      <section className="flex grow flex-col items-center max-w-3xl">
        <motion.h1
          ref={ref}
          className=" relative scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-8 min-w-45 text-center"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div>Technology focussed,</div>
          <div>creatively driven.</div>
        </motion.h1>
        <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-8">
          These terms and conditions outline the rules and regulations for the
          use of Alex Rabin&aposs Website, located at alexrabin.com. By
          accessing this website we assume you accept these terms and
          conditions. Do not continue to use Alex Rabin if you do not agree to
          take all of the terms and conditions stated on this page. this website
          we assume you accept these terms and conditions. Do not continue to
          use Alex Rabin if you do not agree to take all of the terms and
          conditions stated on this page
        </p>
      </section>
      <Footer />
    </main>
  );
}
