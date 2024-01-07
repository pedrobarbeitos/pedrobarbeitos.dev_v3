import { X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" asChild>
      <Link href="/projects/film-collection">
        {" "}
        <X className="h-4 w-4" />
      </Link>
    </Button>
  );
}
