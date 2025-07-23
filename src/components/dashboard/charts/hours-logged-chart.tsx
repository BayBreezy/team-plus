"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";

const chartData = [
  { day: "Mon", hours: 6 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 7 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 0 },
  { day: "Sun", hours: 2 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2d5cf2",
  },
} satisfies ChartConfig;

/**
 * Component used to display a chart of hours logged over the last 7 days
 */
export function HoursLoggedChart() {
  return (
    <Card className="ring-muted bg-background border-0 shadow-xs ring-1">
      <CardHeader>
        <CardTitle>Hours Logged</CardTitle>
        <CardDescription>Showing total hours logged for the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 6,
              right: 6,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="hours"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
