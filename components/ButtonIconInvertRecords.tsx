import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useAppContext } from "@/lib/AppContext";

export function ButtonIconInvertRecords() {
  const { searchedRecords, setSearchedRecords } = useAppContext();
  const [isAscending, setIsAscending] = useState(true);

  const swapOrder = () => {
    const swappedRecords = searchedRecords.slice().reverse();
    setSearchedRecords(swappedRecords);

    setIsAscending(!isAscending);
  };

  return (
    <Button variant="outline" size="icon" onClick={swapOrder} asChild>
      <div>
        {isAscending ? (
          <ArrowDown className="h-4 w-4" />
        ) : (
          <ArrowUp className="h-4 w-4" />
        )}
      </div>
    </Button>
  );
}
