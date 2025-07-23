import tasksData from "@/assets/tasks.json";
import { AnimatedSection } from "@/components/animated-section";
import { HoursLoggedChart } from "@/components/dashboard/charts/hours-logged-chart";
import { TaskDistributionChart } from "@/components/dashboard/charts/task-distribution-chart";
import OverviewCards from "@/components/dashboard/overview-cards";
import { columns } from "@/components/dashboard/tasks/columns";
import { TasksDataTable } from "@/components/dashboard/tasks/data-table";
import { GradientDivider } from "@/components/ui/gradient-divider";
import { motion } from "motion/react";

/**
 * `Page`: Displays the dashboard with overview cards, charts, and a tasks data table.
 */
const DashboardPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 p-5">
      <div className="flex flex-col gap-px leading-none">
        <AnimatedSection asChild>
          <motion.h1 className="text-2xl font-bold">Dashboard</motion.h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1} asChild>
          <motion.p className="text-muted-foreground">Welcome to your dashboard!</motion.p>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.2}>
        <GradientDivider />
      </AnimatedSection>
      <OverviewCards />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
        <AnimatedSection delay={0.4} className="col-span-full lg:col-span-8">
          <HoursLoggedChart />
        </AnimatedSection>
        <AnimatedSection delay={0.5} className="col-span-full lg:col-span-4">
          <TaskDistributionChart />
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.6} className="grid grid-cols-1">
        <TasksDataTable columns={columns} data={tasksData} />
      </AnimatedSection>
    </div>
  );
};

export default DashboardPage;
