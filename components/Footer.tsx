import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" text-xs flex flex-col items-center pt-8">
      <div className=" flex justify-between w-auto gap-2 items-center h-6 text-muted-foreground">
        <Link href="/terms">terms</Link>
        <Link href="">privacy</Link>
      </div>
      <p>Pedro Barbeitos © 2024</p>
    </div>
  );
}
