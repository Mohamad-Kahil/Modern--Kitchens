import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  Clock,
  Calendar,
} from "lucide-react";

interface DashboardStatProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const DashboardStat = (
  { title, value, change, isPositive, icon }: DashboardStatProps = {
    title: "Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
) => {
  return (
    <Card className="bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"} flex items-center`}
        >
          {change}
          <span className="ml-1">
            {isPositive ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingUp className="h-3 w-3 transform rotate-180" />
            )}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

interface ChartCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const ChartCard = (
  { title, description, children }: ChartCardProps = {
    title: "Overview",
    description: "Monthly revenue performance",
  },
) => {
  return (
    <Card className="col-span-4 bg-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent className="pl-2">
        {children || (
          <div className="h-[200px] w-full flex items-center justify-center bg-muted/20 rounded-md">
            <p className="text-muted-foreground">
              Chart visualization placeholder
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

interface RecentActivityProps {
  activities?: Array<{
    id: string;
    action: string;
    date: string;
    user: string;
  }>;
}

const RecentActivity = (
  { activities }: RecentActivityProps = {
    activities: [
      {
        id: "1",
        action: "New order placed",
        date: "2 hours ago",
        user: "John Doe",
      },
      {
        id: "2",
        action: "Inventory updated",
        date: "5 hours ago",
        user: "Jane Smith",
      },
      {
        id: "3",
        action: "Customer inquiry",
        date: "Yesterday",
        user: "Mike Johnson",
      },
      {
        id: "4",
        action: "Invoice paid",
        date: "Yesterday",
        user: "Sarah Williams",
      },
      {
        id: "5",
        action: "New product added",
        date: "2 days ago",
        user: "Alex Brown",
      },
    ],
  },
) => {
  return (
    <Card className="col-span-3 bg-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities?.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <div className="rounded-full bg-primary/10 p-1">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.action}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{activity.user}</span>
                  <span className="mx-1">•</span>
                  <span>{activity.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface UpcomingTasksProps {
  tasks?: Array<{
    id: string;
    title: string;
    date: string;
    priority: "high" | "medium" | "low";
  }>;
}

const UpcomingTasks = (
  { tasks }: UpcomingTasksProps = {
    tasks: [
      {
        id: "1",
        title: "Kitchen design review",
        date: "Today, 2:00 PM",
        priority: "high",
      },
      {
        id: "2",
        title: "Supplier meeting",
        date: "Tomorrow, 10:00 AM",
        priority: "medium",
      },
      {
        id: "3",
        title: "Inventory check",
        date: "Wed, 9:00 AM",
        priority: "medium",
      },
      {
        id: "4",
        title: "Customer installation",
        date: "Thu, 11:30 AM",
        priority: "high",
      },
      { id: "5", title: "Team meeting", date: "Fri, 3:00 PM", priority: "low" },
    ],
  },
) => {
  return (
    <Card className="col-span-3 bg-card">
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks?.map((task) => (
            <div
              key={task.id}
              className="flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
            >
              <div className="rounded-full bg-primary/10 p-1">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{task.title}</p>
                <div className="flex items-center text-xs">
                  <span className="text-muted-foreground">{task.date}</span>
                  <span className="mx-1">•</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-full text-xs",
                      task.priority === "high"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                    )}
                  >
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface DashboardModuleProps {
  userName?: string;
}

const DashboardModule = ({ userName = "Admin" }: DashboardModuleProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col w-full h-full bg-background p-6 overflow-hidden">
      {/* Tab navigation container - Fixed at the top */}
      <div className="sticky top-0 z-10 mb-6 bg-card rounded-lg p-4 border border-border shadow-light-card">
        <h2 className="text-xl font-semibold mb-3">Dashboard</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start bg-muted/50">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Main container with overflow */}
      <div className="flex flex-col h-full overflow-auto">
        {/* Content container */}
        <div className="flex-1 overflow-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-col h-full"
          >
            <div className="h-full overflow-auto">
              <TabsContent
                value="overview"
                className="h-full data-[state=active]:flex data-[state=active]:flex-col"
              >
                {/* Stats row */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                  <DashboardStat
                    title="Total Revenue"
                    value="$45,231.89"
                    change="+20.1%"
                    isPositive={true}
                    icon={
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    }
                  />
                  <DashboardStat
                    title="Orders"
                    value="+2350"
                    change="+12.2%"
                    isPositive={true}
                    icon={
                      <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                    }
                  />
                  <DashboardStat
                    title="Products"
                    value="+12,234"
                    change="+2.1%"
                    isPositive={true}
                    icon={<Package className="h-4 w-4 text-muted-foreground" />}
                  />
                  <DashboardStat
                    title="Active Customers"
                    value="+573"
                    change="-0.4%"
                    isPositive={false}
                    icon={<Users className="h-4 w-4 text-muted-foreground" />}
                  />
                </div>

                {/* Charts row */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 h-[calc(100%-120px)]">
                  <ChartCard
                    title="Revenue Overview"
                    description="Monthly revenue performance"
                  />
                  <ChartCard
                    title="Sales by Category"
                    description="Distribution of sales by product category"
                  />
                </div>
              </TabsContent>

              <TabsContent
                value="analytics"
                className="h-full data-[state=active]:flex data-[state=active]:flex-col"
              >
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 h-full">
                  <ChartCard
                    title="Sales Trends"
                    description="Year-over-year comparison"
                  />
                  <ChartCard
                    title="Customer Demographics"
                    description="Customer age and location distribution"
                  />
                </div>
              </TabsContent>

              <TabsContent
                value="reports"
                className="h-full data-[state=active]:flex data-[state=active]:flex-col"
              >
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 h-full">
                  <ChartCard
                    title="Monthly Reports"
                    description="Download and view monthly performance reports"
                  />
                  <ChartCard
                    title="Custom Reports"
                    description="Generate custom reports based on selected parameters"
                  />
                </div>
              </TabsContent>

              <TabsContent
                value="activity"
                className="h-full data-[state=active]:flex data-[state=active]:flex-col"
              >
                <div className="h-full">
                  <RecentActivity />
                </div>
              </TabsContent>

              <TabsContent
                value="tasks"
                className="h-full data-[state=active]:flex data-[state=active]:flex-col"
              >
                <div className="h-full">
                  <UpcomingTasks />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashboardModule;
