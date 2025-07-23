/**
 * Represents a sidebar menu item in the application.
 */
export type SidebarMenuItem = {
  label: string;
  icon: React.ComponentType;
  to: string;
  isActive?: boolean;
  count?: number; // optional count for items like tasks
};

/**
 * Represents a section of the sidebar menu, containing a title and an array of menu items.
 */
export type SidebarMenuSection = {
  title: string;
  items: SidebarMenuItem[];
};

/**
 * Represents a user in the application.
 */
export type User = {
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
};
