import { cn } from "@/lib/utils";
import { Root } from "@radix-ui/react-slot";
import { motion } from "motion/react";

/**
 * Component used to animate sections with a fade-in effect.
 */
export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  asChild = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  asChild?: boolean;
}) => {
  // If `asChild` is true, the component will render as a child of the provided element
  const Component = asChild ? Root : motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </Component>
  );
};
