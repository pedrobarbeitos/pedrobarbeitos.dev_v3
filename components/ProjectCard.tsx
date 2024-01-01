import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BadgeDes } from "@/components/Badge";
import gitImage from "/public/github-mark.png";
import linkImage from "/public/link.png";

interface projectInfo {
  projectImage: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  projectTech: string[];
  projectLink: string;
  projectGitLink: string;
}

export default function ProjectCard(props: projectInfo) {
  return (
    <div className="relative flex grow flex-col items-center w-full max-w-3xl">
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
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-2">
        {props.projectTitle}
      </h4>
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
    </div>
  );
}
