"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { name: "todo", value: 12, fill: "var(--color-todo)" },
  { name: "in-progress", value: 8, fill: "var(--color-in-progress)" },
  { name: "done", value: 24, fill: "var(--color-done)" },
];

const chartConfig = {
  value: {
    label: "Count",
  },
  todo: {
    label: "To Do",
    color: "oklch(68.5% 0.169 237.323)",
  },
  "in-progress": {
    label: "In Progress",
    color: "oklch(79.5% 0.184 86.047)",
  },
  done: {
    label: "Done",
    color: "oklch(69.6% 0.17 162.48)",
  },
} satisfies ChartConfig;

/**
 * Component used to display a pie chart of task distribution
 */
export function TaskDistributionChart() {
  return (
    <Card className="ring-muted bg-background flex flex-col border-0 shadow-xs ring-1">
      <CardHeader className="items-center pb-0">
        <CardTitle>Task Distribution</CardTitle>
        <CardDescription>Chart showing the distribution of tasks</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-[300px] w-full pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="name" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
