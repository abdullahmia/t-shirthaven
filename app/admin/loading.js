import Loader from "@/components/loader";

export default function Loading() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader size={70} />
    </div>
  );
}
