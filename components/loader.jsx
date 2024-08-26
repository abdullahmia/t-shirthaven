import { LoaderCircle } from "lucide-react";

export default function Loader({ size }) {
  return (
    <LoaderCircle
      size={size || 40}
      className="animate-spin text-secondary ease-in-out"
    />
  );
}
