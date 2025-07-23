import MobileNavbar from "@/components/mobile-navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useTheme } from "@/context/theme-context";
import { userStore } from "@/stores/user";
import {
  BarChart3,
  Clock,
  FolderKanban,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Sliders,
  SunMedium,
  User,
  Users,
} from "lucide-react";
import type { SidebarMenuSection } from "@/types";

/**
 * Layout used to display the dashboard
 */
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // Get the current theme
  const { setTheme, theme } = useTheme();
  // Get user information from the store
  const user = userStore.user.use();
  const userFullname = userStore.userFullName.use();

  // Define the sidebar menu structure
  const sidebarMenu: SidebarMenuSection[] = [
    {
      title: "Main",
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard, // icon name (you can map to lucide-react)
          to: "/dashboard",
          isActive: true,
        },
      ],
    },
    {
      title: "Work",
      items: [
        {
          label: "Projects",
          icon: FolderKanban,
          to: "/projects",
        },
        {
          label: "Tasks",
          icon: ListChecks,
          to: "/tasks",
          count: 15, // optional count for tasks
        },
        {
          label: "Time Tracking",
          icon: Clock,
          to: "/time-tracking",
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          label: "Team",
          icon: Users,
          to: "/team",
        },
        {
          label: "Reports",
          icon: BarChart3,
          to: "/reports",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          label: "Profile",
          icon: User,
          to: "/settings/profile",
        },
        {
          label: "App Settings",
          icon: Sliders,
          to: "/settings/app",
        },
      ],
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={userFullname} size={"lg"}>
                <Avatar>
                  <AvatarImage src={user?.avatar} alt={userFullname} />
                  <AvatarFallback>BB</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <p className="truncate font-medium">{userFullname}</p>
                  <p className="text-muted-foreground truncate text-xs">{user?.email}</p>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          {sidebarMenu.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton tooltip={item.label} isActive={item?.isActive}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    {item.count && <SidebarMenuBadge>{item.count}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                tooltip={"Theme"}
              >
                <SunMedium />
                <span>Theme</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={"Logout"}>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <MobileNavbar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
