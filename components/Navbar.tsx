import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full h-16 sticky top-0 bg-background/80 z-10 backdrop-blur-sm">
      <div className="flex items-center h-6">
        <Link href="/">
          <h1 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            pe/ba
          </h1>
        </Link>
      </div>
      <div className="flex justify-between w-auto gap-3 items-center h-6">
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
        <ModeToggle />
      </div>
    </div>
  );
}
