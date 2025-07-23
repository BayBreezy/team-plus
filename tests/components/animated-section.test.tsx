import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AnimatedSection } from "../../src/components/animated-section";

describe("AnimatedSection", () => {
  it("renders default children inside a div", () => {
    render(<AnimatedSection>Stand tall 🚌</AnimatedSection>);
    const container = screen.getByText("Stand tall 🚌").parentElement;
    expect(container?.tagName).toBe("DIV");
  });

  it("passes extra className prop to wrapper element", () => {
    render(<AnimatedSection className="test-class">Test</AnimatedSection>);
    const container = screen.getByText("Test");
    expect(container.className).toContain("test-class");
  });

  it("honors the `delay` prop via inline styles", async () => {
    render(<AnimatedSection delay={1}>Delayed child</AnimatedSection>);
    const { style } = screen.getByText("Delayed child");
    expect(style.opacity).toBe("0");
    await waitFor(
      () => {
        expect(style.opacity).toBe("1");
      },
      { timeout: 2_000 }
    );
  });
});
