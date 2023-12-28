import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full h-4">
      <div className="flex items-center h-4">pedro barbeitos</div>
      <div className="flex justify-between w-auto gap-2 items-center h-4">
        <Link href="">about</Link>
        <Link href="">work</Link>
        <ModeToggle />
      </div>
    </div>
  );
}
