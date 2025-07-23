import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

import { TaskDistributionChart } from "../../../../src/components/dashboard/charts/task-distribution-chart";

/**
 * We have to mock the `ResponsiveContainer` from recharts
 *
 * If not we get an error stating `The width(0) and height(0) of chart should be greater than 0`
 *
 * @see https://github.com/recharts/recharts/issues/2982
 */
vi.mock("recharts", async (importOriginal) => {
  const originalModule = (await importOriginal()) as Record<string, unknown>;
  return {
    ...originalModule,
    ResponsiveContainer: () => (
      <div className="recharts-responsive-container" style={{ width: "100%", height: "100%" }} />
    ),
  };
});

describe("TaskDistributionChart", () => {
  beforeAll(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });
  it("renders cards without crashing", () => {
    render(<TaskDistributionChart />);
    const chartTitle = screen.getByText("Task Distribution");
    expect(chartTitle).toBeDefined();
  });
});
