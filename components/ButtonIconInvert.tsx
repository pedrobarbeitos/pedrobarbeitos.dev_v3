import { ChevronUp, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonIconInvert() {
  return (
    <Button variant="outline" size="icon" asChild>
      <ChevronDown className="h-[40px] w-[40px]" />
    </Button>
  );
}
