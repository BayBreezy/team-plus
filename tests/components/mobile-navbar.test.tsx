import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

import MobileNavbar from "../../src/components/mobile-navbar";
import { SidebarProvider } from "../../src/components/ui/sidebar";

describe("MobileNavbar", () => {
  /**
   * This was a tricky one.
   *
   * We have to mock the `window.matchMedia` function to simulate different screen sizes.
   *
   * The `matchMedia` function is used in the `useIsMobile` hook to determine if the screen is mobile-sized.
   */
  const matchMediaMock = (matches: boolean) => {
    return vi.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  };

  describe("on large screens", () => {
    beforeAll(() => {
      // Simulate a non-mobile screen
      window.matchMedia = matchMediaMock(false);
      window.innerWidth = 1024;
    });

    it("should not render the mobile navbar", () => {
      const { container } = render(
        <SidebarProvider>
          <MobileNavbar />
        </SidebarProvider>
      );
      const header = container.querySelector("header");
      expect(header).toBeNull(); // Should not render
    });
  });

  describe("on mobile screens", () => {
    beforeAll(() => {
      window.matchMedia = matchMediaMock(true);
      window.innerWidth = 375;
    });

    it("should render the mobile navbar", () => {
      render(
        <SidebarProvider>
          <MobileNavbar />
        </SidebarProvider>
      );

      const header = screen.getByRole("banner");
      expect(header).toBeDefined(); // Should render
    });
  });
});
