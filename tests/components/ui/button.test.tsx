import { render, screen } from "@testing-library/react";
import { SunDim } from "lucide-react";
import { describe, expect, it } from "vitest";

import { Button } from "../../../src/components/ui/button";

describe("Button", () => {
  it("should render default button with correct children", () => {
    render(
      <Button>
        <SunDim />
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button.innerHTML).toContain("Click me");
    expect(button.innerHTML).toContain("lucide-sun-dim");
  });
});
