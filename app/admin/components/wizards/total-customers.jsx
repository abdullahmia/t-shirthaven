"use client";

import { Area, AreaChart } from "recharts";

import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", totalCustomers: 120 },
  { month: "February", totalCustomers: 180 },
  { month: "March", totalCustomers: 150 },
  { month: "April", totalCustomers: 90 },
  { month: "May", totalCustomers: 140 },
  { month: "June", totalCustomers: 160 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

export function TotalCustomers() {
  return (
    <div className="bg-white flex flex-col justify-between rounded-lg border border-[#E9E9EB] p-5 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[16px] font-semibold text-primary">Customers</h2>
          <p className="text-xs text-secondary uppercase">THIS MONTH</p>
        </div>
        <div>
          <h2 className="text-2xl text-primary font-bold">2,571</h2>
        </div>
      </div>
      <ChartContainer config={{}} className="h-[80px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <Area
            dataKey="totalCustomers"
            stroke="#8884d8"
            fillOpacity={1}
            fill="#85C1E9"
            radius={4}
            animationDuration={500}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
