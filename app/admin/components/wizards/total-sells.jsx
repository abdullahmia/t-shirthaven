"use client";

import { Bar, BarChart } from "recharts";

import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
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

export function TotalSells() {
  return (
    <div className="bg-white rounded-lg border border-[#E9E9EB] p-5 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[16px] font-semibold text-primary">
            Total Sales
          </h2>
          <p className="text-xs text-secondary uppercase">THIS MONTH</p>
        </div>
        <div>
          <h2 className="text-2xl text-primary font-bold">$ 4,235</h2>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
