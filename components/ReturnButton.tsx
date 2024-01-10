"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ReturnButton() {
  const router = useRouter();
  return (
    <Button variant="outline" size="icon" onClick={() => router.back()} asChild>
      <div>
        {" "}
        <ChevronLeft className="h-4 w-4" />
      </div>
    </Button>
  );
}
