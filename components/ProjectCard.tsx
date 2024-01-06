"use client";

import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BadgeDes } from "@/components/Badge";
import gitImage from "/public/github-mark.png";
import linkImage from "/public/link.png";
import { motion, useInView, useAnimation } from "framer-motion";

interface projectInfo {
  projectImage: StaticImageData;
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
      className="relative flex grow flex-col items-center w-full max-w-3xl snap-start shrink-0"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
    >
      {" "}
      <Link href={props.projectLink}>
        <Image
          className="object-contain"
          src={props.projectImage}
          width={800}
          height={800}
          alt={props.projectTitle}
          priority
        />
      </Link>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0 ">
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
      <p className="leading-7 text-sm [&:not(:first-child)]:mt-6 text-justify pt-0 pb-6">
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
