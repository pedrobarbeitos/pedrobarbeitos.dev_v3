"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import DiscogRecord from "@/app/models/DiscogRecord";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SelectFilter } from "@/components/SelectFilterRecords";
import { SearchInput } from "@/components/SearchInput";
import { ButtonIconInvertRecords } from "./ButtonIconInvertRecords";
import { motion, useInView, useAnimation } from "framer-motion";
import { useAppContext } from "@/lib/AppContext";

interface props {
  records: DiscogRecord[];
}

export default function FilmGallery(props: props) {
  const { searchedRecords, setSearchedRecords } = useAppContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchedRecords.length === 0) {
      setSearchedRecords(props.records);
    }
  }, [props.records, searchedRecords, setSearchedRecords]);

  const updatedSearchedRecords = searchedRecords.filter((record) =>
    record.basic_information.title.toLowerCase().includes(search.toLowerCase())
  );

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
      className="flex flex-wrap justify-center w-full mb-8 leading-none"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.85, delay: 0.1 }}
    >
      <div className="flex flex-col items-center max-w-3xl justify-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight pt-8 pb-0">
          My record collection
        </h4>
        <p className="text-sm text-muted-foreground pb-2">
          Data provided by{" "}
          <Link
            href="https://developer.themoviedb.org/reference/intro/getting-started"
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
          >
            Discogs
          </Link>
        </p>
      </div>
      <div className="flex justify-center w-full pb-8 pt-4 gap-1 sm:gap-3">
        <ButtonIconInvertRecords />
        <SelectFilter originalRecords={props.records} />
        <SearchInput setSearch={setSearch} />
      </div>
      <motion.div
        layout
        className="flex flex-wrap justify-center w-full gap-3 mb-8 leading-none"
      >
        {updatedSearchedRecords.length === 0 && search.length === 0
          ? Array(50)
              .fill(null)
              .map((_, i) => <Skeleton key={i} width={150} height={150} />)
          : updatedSearchedRecords.map((record) => (
              <motion.div key={record.basic_information.id} layout>
                <Link
                  href={`/projects/record-collection/${record.basic_information.id}`}
                >
                  <Image
                    className="grayscale-[50%] hover:grayscale-0"
                    src={record.basic_information.cover_image}
                    alt={record.basic_information.title}
                    width={150}
                    height={150}
                    priority
                  />
                </Link>
              </motion.div>
            ))}
      </motion.div>
    </motion.section>
  );
}
