import { Button } from "@react-email/components";

export function EmailButton({ label, href }) {
  return (
    <Button className="rounded-md bg-black p-4 text-white" href={href}>
      {label}
    </Button>
  );
}
