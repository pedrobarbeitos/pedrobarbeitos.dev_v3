import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" text-xs text-muted-foreground flex flex-col items-center pt-0 w-full ">
      <Link href="/terms">
        <p>Pedro Barbeitos © 2024</p>
      </Link>
    </div>
  );
}
