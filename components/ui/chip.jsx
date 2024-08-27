export default function Chip({ variant = "neutral", label }) {
  let bgColour =
    variant === "success"
      ? "bg-green-500"
      : variant === "danger"
      ? "bg-red-500"
      : variant === "warning"
      ? "bg-yellow-500"
      : "bg-gray-500";
  return (
    <div
      className={`inline-block text-[12px] text-white px-4 py-1 rounded-full ${bgColour}`}
    >
      {label}
    </div>
  );
}
