import { useIsMobile } from "@/hooks/use-mobile";

import { SidebarTrigger } from "./ui/sidebar";

/**
 * Nav bar only displayed on mobile view
 */
const MobileNavbar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null; // Do not render the navbar on non-mobile screens
  }
  return (
    <header className="bg-background/80 sticky top-0 z-30 flex h-14 items-center border-b px-5 backdrop-blur-md">
      <SidebarTrigger />
    </header>
  );
};

export default MobileNavbar;
