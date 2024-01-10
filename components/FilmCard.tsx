"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import TmdbFilm from "@/app/models/TmdbFilm";
import { ReturnButton } from "@/components/ReturnButton";
import { motion, useInView, useAnimation } from "framer-motion";

type props = {
  film: TmdbFilm;
};

function FilmCard(props: props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center max-w-2xl justify-center pb-4"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.85, delay: 0.1 }}
    >
      <Image
        className="grayscale-[50%]"
        src={"https://image.tmdb.org/t/p/w1280" + props.film.backdrop_path}
        alt={props.film.title}
        width={672}
        height={378}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPM+gkAAdMBZdytAagAAAAASUVORK5CYII="
        priority
      />

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0">
        {props.film.title}
      </h4>
      <p className="text-sm text-muted-foreground pb-2">{props.film.tagline}</p>
      <p className="leading-6 text-sm [&:not(:first-child)]:mt-0  pt-2 pb-4">
        {props.film.overview}
      </p>
      <ReturnButton />
    </motion.section>
  );
}

export default FilmCard;
