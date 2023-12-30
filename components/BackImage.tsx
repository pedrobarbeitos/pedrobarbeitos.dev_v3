"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./backImage.module.css";
import A01 from "../public/01A.jpg";
import B01 from "../public/01B.jpg";

const BackImage = (props: {
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
}) => {
  const [isTopLeftOrBottomRight, setIsTopLeftOrBottomRight] =
    useState<boolean>(true);
  const [tiltStyle, setTiltStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const cursorX = e.clientX;
      const cursorY = e.clientY;

      setIsTopLeftOrBottomRight(
        (cursorX < windowWidth / 2 && cursorY < windowHeight / 2) ||
          (cursorX >= windowWidth / 2 && cursorY >= windowHeight / 2)
      );

      const tiltX = ((cursorY - windowHeight / 2) / windowHeight) * 15;
      const tiltY = (-(cursorX - windowWidth / 2) / windowWidth) * 15;

      setTiltStyle({
        transform: `translate(-50%, -50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.imageContainer}>
      <div
        className={`${styles.imageBox} ${
          isTopLeftOrBottomRight ? styles.visible : ""
        }`}
        style={tiltStyle}
      >
        <Image
          src={props.imageOne}
          width={700}
          height={700}
          alt="Image A01"
          priority
        />
      </div>
      <div
        className={`${styles.imageBox} ${
          !isTopLeftOrBottomRight ? styles.visible : ""
        }`}
        style={tiltStyle}
      >
        <Image
          src={props.imageTwo}
          width={700}
          height={700}
          alt="Image B01"
          priority
        />
      </div>
    </div>
  );
};

export default BackImage;
