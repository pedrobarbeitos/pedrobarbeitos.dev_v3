import { ArrowDown, ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonIconInvert() {
  return (
    <Button variant="outline" size="icon" asChild>
      <div>
        {" "}
        <ArrowDown className="h-4 w-4" />
      </div>
    </Button>
  );
}
