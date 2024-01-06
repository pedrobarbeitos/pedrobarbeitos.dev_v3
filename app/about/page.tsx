"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import gitImage from "/public/github-mark.png";
import linkedinImage from "/public/linkedin.png";
import instagramImage from "/public/instagram.png";

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
    <main className="  flex w-full flex-col items-center">
      <section className="flex flex-col items-center max-w-3xl justify-center">
        <motion.h1
          ref={ref}
          className=" relative scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  min-w-45 text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <div>Technology focussed,</div>
          <div className="pt-2">creatively driven.</div>
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
        <div className="flex relative items-center content-center gap-4 pb-8 pt-8 ">
          <Link href="/">
            <Image
              className="object-contain dark:invert"
              src={gitImage}
              width={25}
              height={25}
              alt="Pedro GitHub"
              priority
            />
          </Link>
          <Link href="/">
            <Image
              className="object-contain dark:invert"
              src={linkedinImage}
              width={25}
              height={25}
              alt="Pedro GitHub"
              priority
            />
          </Link>
          <Link href="/">
            <Image
              className="object-contain dark:invert"
              src={instagramImage}
              width={25}
              height={25}
              alt="Pedro GitHub"
              priority
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
