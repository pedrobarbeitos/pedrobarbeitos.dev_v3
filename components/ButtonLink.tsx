import { Button } from "@/components/ui/button";
import Link from "next/link";

interface buttonInfo {
  name: string;
  route: string;
}

export function ButtonLink(props: buttonInfo) {
  return (
    <Button variant="link" asChild>
      <Link href={"/" + props.route}>{props.name}</Link>
    </Button>
  );
}
