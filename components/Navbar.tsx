import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full h-12 sticky top-0 bg-background ">
      <div className="flex items-center h-6">
        <Link href="/">
          <b>pedro barbeitos</b>
        </Link>
      </div>
      <div className="flex justify-between w-auto gap-3 items-center h-6">
        <Link href="">about</Link>
        <Link href="/projects">projects</Link>
        <ModeToggle />
      </div>
    </div>
  );
}
