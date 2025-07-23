import { CheckCircle, Clock, FolderKanban, Users } from "lucide-react";

import { AnimatedSection } from "../animated-section";

/**
 * OverviewCards component displays a set of cards summarizing key metrics
 */
const OverviewCards = () => {
  // Local state for overview cards
  // This should come from an API or global state
  const overviewCards = [
    {
      title: "Total Projects",
      value: 8,
      icon: FolderKanban,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Active projects you're managing",
    },
    {
      title: "Tasks Completed",
      value: 124,
      icon: CheckCircle,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      description: "Finished tasks across projects",
    },
    {
      title: "Hours Logged",
      value: 76,
      icon: Clock,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Total tracked hours this week",
    },
    {
      title: "Active Members",
      value: 5,
      icon: Users,
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100",
      description: "Teammates currently active",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {overviewCards.map((card, idx) => (
        <AnimatedSection key={card.title} delay={0.3 + idx * 0.1}>
          <div
            key={card.title}
            className="bg-background ring-muted rounded-lg p-5 shadow-xs ring-1"
          >
            <div className="flex w-full items-start gap-4">
              <div className="flex grow flex-col gap-2">
                <p className="line-clamp-1 truncate text-sm">{card.title}</p>
                <h3 className="text-3xl font-bold slashed-zero tabular-nums">{card.value}</h3>
              </div>
              <div className="dark:from-card dark:via-card/90 shrink-0 rounded-full bg-linear-to-b from-zinc-100 via-zinc-100/50 to-transparent p-3">
                <card.icon className={`size-6 ${card.iconColor}`} />
              </div>
            </div>
            <p
              title={card.description}
              className="text-muted-foreground mt-3 line-clamp-1 truncate text-sm"
            >
              {card.description}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default OverviewCards;
