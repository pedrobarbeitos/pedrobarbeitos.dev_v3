"use client"; // Error components must be Client Components

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
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center max-w-2xl justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Oops!
      </h1>
      <h2 className="pb-8 text-center">
        Not all records in my collection can be found on the Apple Music
        Database. Please go back and select a different album.
      </h2>
      <ReturnButton />
    </div>
  );
}
