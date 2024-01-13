"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BadgeDes } from "@/components/Badge";
import gitImage from "/public/github-mark.png";
import linkImage from "/public/link.png";
import { motion, useInView, useAnimation } from "framer-motion";

interface projectInfo {
  projectImage_01: StaticImageData;
  projectImage_02: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  projectTech: string[];
  projectLink: string;
  projectGitLink: string;
  projectStatus: string;
}

export default function ProjectCard(props: projectInfo) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      className="relative flex  flex-col items-center w-full max-w-3xl snap-start shrink-0"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {" "}
      <div className="w-full flex flex-row justify-between gap-3 grow-0 ">
        {" "}
        <div className="w-auto aspect-[3/4.1] sm:border-[12px] border-[8px] border-gray-900 sm:rounded-[21px] rounded-[12px] bg-whiteback flex flex-col items-end justify-end relative">
          <Image
            className="object-fill rounded-[8px] sm:rounded-lg  "
            src={props.projectImage_01}
            width={306}
            height={425}
            alt={props.projectTitle}
            priority
          />
        </div>
        <div className="w-auto aspect-[3/4.1] sm:border-[12px] border-[8px] border-gray-900 sm:rounded-[21px] rounded-[12px] bg-whiteback flex flex-col items-end justify-end">
          <Image
            className="object-fill rounded-[8px] sm:rounded-lg "
            src={props.projectImage_02}
            width={306}
            height={425}
            alt={props.projectTitle}
            priority
          />
        </div>
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-6 pb-0 ">
        {props.projectTitle}
      </h4>
      <p className="text-sm text-muted-foreground pb-2">
        Status: {props.projectStatus}
      </p>
      <div className="flex relative items-center content-center gap-2 pb-0">
        <Link href={props.projectLink}>
          <Image
            className="object-contain dark:invert"
            src={linkImage}
            width={25}
            height={25}
            alt={props.projectTitle}
            priority
          />
        </Link>
        <Link href={props.projectLink}>
          <Image
            className="object-contain dark:invert"
            src={gitImage}
            width={25}
            height={25}
            alt={props.projectTitle}
            priority
          />
        </Link>
      </div>
      <p className="leading-6 text-sm [&:not(:first-child)]:mt-6 pt-0 pb-6">
        {props.projectDesc}
      </p>
      <div className=" flex justify-center items-center w-full gap-2 pb-24">
        {props.projectTech.map((tech, i) => (
          <BadgeDes key={i} badge={tech} />
        ))}
      </div>
    </motion.div>
  );
}
