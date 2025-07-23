import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import OverViewCards from "../../../src/components/dashboard/overview-cards";

describe("OverviewCards", () => {
  it("renders cards without crashing", () => {
    render(<OverViewCards />);
    expect(screen.getByText("Total Projects")).toBeDefined();
  });

  it("displays all overview cards with correct title & value", () => {
    render(<OverViewCards />);
    const cards = [
      { title: "Total Projects", value: "8" },
      { title: "Tasks Completed", value: "124" },
      { title: "Hours Logged", value: "76" },
      { title: "Active Members", value: "5" },
    ];
    cards.forEach(({ title, value }) => {
      const res = screen.getByText(title);
      expect(res).toBeDefined();
      expect(res.nextElementSibling?.innerHTML).toBe(value);
    });
  });
});
