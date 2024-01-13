"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion, useInView, useAnimation } from "framer-motion";

type props = {
  albumId: string;
};

function AlbumCard(props: props) {
  const { theme } = useTheme();

  return (
    <motion.div
      className="pb-8"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.1 }}
    >
      <iframe
        className="sm:w-[672px] "
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        height="450"
        style={{
          overflow: "hidden",
          backgroundColor: "transparent",
          borderRadius: "11px",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        src={`https://embed.music.apple.com/us/album/${props.albumId}?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=${theme}`}
      ></iframe>
    </motion.div>
  );
}

export default AlbumCard;
