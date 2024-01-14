"use client";

import { useEffect } from "react";
import { ReturnButton } from "@/components/ReturnButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center max-w-2xl justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Oops!
      </h1>
      <h2 className="pb-8 text-center">
        There was error while trying to load this page. Please go back or try
        refreshing the page.
      </h2>
      <ReturnButton />
    </div>
  );
}
