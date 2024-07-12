"use client";

import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function BestSelling() {
  return (
    <div className="col-span-1 bg-white rounded-lg border border-[#E9E9EB] space-y-6">
      <div className="border-b pb-7 p-5 border-[#E9E9EB]">
        <h2 className="text-[16px] font-semibold text-primary">Best Selling</h2>
        <p className="text-xs text-secondary uppercase">THIS MONTH</p>
      </div>

      <div className="p-5">
        <h2 className="text-[24px] font-bold text-primary">
          $2,400{" "}
          <span className="text-sm text-secondary font-normal">
            — Total Sales
          </span>
        </h2>

        <div className="space-y-3 mt-4">
          <p className="text-sm text-secondary font-normal border px-4 py-2 rounded-full inline-block">
            Classic Monochrome Tees —{" "}
            <span className="text-primary font-semibold">$940 Sales</span>
          </p>
          <p className="text-sm text-secondary font-normal border px-4 py-2 rounded-full inline-block">
            Monochromatic Wardrobe —
            <span className="text-primary font-semibold">$790 Sales</span>
          </p>

          <p className="text-sm text-secondary font-normal border px-4 py-2 rounded-full inline-block">
            Essential Neutrals —
            <span className="text-primary font-semibold">$740 Sales</span>
          </p>
        </div>

        <div className="flex items-center justify-start -mt-24">
          <PieChart width={250} height={300}>
            <Pie
              data={data}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}
