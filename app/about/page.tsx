"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import gitImage from "/public/github-mark.png";
import linkedinImage from "/public/linkedin.png";
import instagramImage from "/public/instagram.png";
import { TypeAnimation } from "react-type-animation";

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
      <section className="flex flex-col items-center max-w-2xl justify-center">
        <motion.h1
          ref={ref}
          className=" relative scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  min-w-45 text-center min-h-36 whitespace-pre-line pt-2 pb-2 "
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Technology focussed,\n design driven. ",
              1000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 75 }}
            repeat={Infinity}
          />
        </motion.h1>
        <motion.p
          ref={ref}
          className="leading-6 text-sm [&:not(:first-child)]:mt-0  pt-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          In 2016 I started creating custom themes for an old school{" "}
          <b>PHP CMS</b>. I&apos;ve since been addicted to solving complex
          problems through a blend of programming and design.
        </motion.p>
        <motion.p
          ref={ref}
          className="leading-6 text-sm [&:not(:first-child)]:mt-6  "
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          These days, I work as a registered <b>UK Architect</b>, yes real
          buildings, and freelance Web Developer. Recently I had the privilege
          to collaborate as a Front-End Developer for an innovative{" "}
          <b>start-up</b>.
        </motion.p>
        <motion.p
          ref={ref}
          className="leading-6 text-sm [&:not(:first-child)]:mt-6  "
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          I am always enthusiastic about embracing new challenges and
          opportunities. If you &apos;re interested in working together or
          simply wish to have a chat, please feel free to <b>reach out</b>.
        </motion.p>
        <motion.div
          ref={ref}
          className="flex relative items-center content-center gap-4 pb-8 pt-8 "
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <Link
            href="https://github.com/pedrobarbeitos"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="object-contain dark:invert"
              src={gitImage}
              width={25}
              height={25}
              alt="GitHub"
              priority
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pedrobarbeitos/"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="object-contain dark:invert"
              src={linkedinImage}
              width={25}
              height={25}
              alt="Linkedin"
              priority
            />
          </Link>
          <Link
            href="https://www.instagram.com/pedro_barbeitos/"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="object-contain dark:invert"
              src={instagramImage}
              width={25}
              height={25}
              alt="Instagram"
              priority
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
