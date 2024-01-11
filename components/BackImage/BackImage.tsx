"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./backImage.module.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTopLeftOrBottomRight((prevState) => !prevState);
    }, 3000);

    return () => clearInterval(interval);
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
          className="object-contain invert grayscale dark:invert-0 dark:grayscale-0"
          src={props.imageOne}
          width={900}
          height={900}
          alt="Pedro Scanned Face One"
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
          className="object-contain invert grayscale dark:invert-0 dark:grayscale-0"
          src={props.imageTwo}
          width={900}
          height={900}
          alt="Pedro Scanned Face Two"
          priority
        />
      </div>
    </div>
  );
};

export default BackImage;
