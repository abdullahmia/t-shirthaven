import { Progress } from "@/components/ui/progress";

export function TotalOrders() {
  return (
    <div className="bg-white flex flex-col justify-between rounded-lg border border-[#E9E9EB] p-5 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[16px] font-semibold text-primary">Orders</h2>
          <p className="text-xs text-secondary">Monthly GOALS : 1,000</p>
        </div>
        <div>
          <h2 className="text-2xl text-primary font-bold">734</h2>
        </div>
      </div>
      <div className="space-y-1 pb-1">
        <p className="text-xs text-secondary">266 Left</p>
        <Progress value={33} className="h-3" />
      </div>
    </div>
  );
}
