import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronRight,
  Home,
  Plus,
  Download,
  Upload,
  MoreHorizontal,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ContentAreaProps {
  moduleTitle?: string;
  submodules?: {
    id: string;
    label: string;
    content?: React.ReactNode;
  }[];
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  isRTL?: boolean;
}

const ContentArea = ({
  moduleTitle = "Dashboard",
  submodules = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ],
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  isRTL = false,
}: ContentAreaProps) => {
  const [activeTab, setActiveTab] = useState(submodules[0]?.id || "");

  return (
    <div className="flex flex-col w-full h-full bg-background p-6 overflow-auto dark:bg-micro-medium">
      {/* Breadcrumbs */}
      <div className="flex items-center mb-4 text-sm text-muted-foreground">
        <Home className="h-4 w-4" />
        <div className="flex items-center">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              <ChevronRight
                className={cn("h-4 w-4 mx-2", isRTL ? "rotate-180" : "")}
              />
              <a
                href={crumb.href}
                className={cn(
                  "hover:text-foreground transition-colors",
                  index === breadcrumbs.length - 1
                    ? "font-medium text-foreground"
                    : "",
                )}
              >
                {crumb.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Submodule Tabs */}
      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-muted/50">
            {submodules.map((submodule) => (
              <TabsTrigger
                key={submodule.id}
                value={submodule.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {submodule.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Search, Filters and Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex flex-1 w-full sm:w-auto gap-2">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className={cn(
                  "absolute top-2.5 text-muted-foreground",
                  isRTL ? "right-3" : "left-3",
                )}
                size={16}
              />
              <input
                type="text"
                placeholder="Search..."
                className={cn(
                  "w-full h-10 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
                  isRTL ? "pr-10 pl-4" : "pl-10 pr-4",
                )}
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 h-10 px-4 py-2 bg-muted/50 hover:bg-muted rounded-md text-sm font-medium transition-colors">
              <Filter size={16} />
              <span>Filters</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button className="flex items-center gap-2 h-10 px-4 py-2 bg-muted/50 hover:bg-muted rounded-md text-sm font-medium transition-colors">
              <Download size={16} />
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 h-10 px-4 py-2 bg-muted/50 hover:bg-muted rounded-md text-sm font-medium transition-colors">
              <Upload size={16} />
              <span>Import</span>
            </button>
            <button className="flex items-center gap-2 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium transition-colors">
              <Plus size={16} />
              <span>Add New</span>
            </button>
            <button className="flex items-center justify-center h-10 w-10 bg-muted/50 hover:bg-muted rounded-md transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-card p-4 rounded-lg border border-border shadow-sm dark:bg-micro-dark"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    KPI Metric {item}
                  </h3>
                  <p className="text-2xl font-bold mt-1">1,234</p>
                  <p className="text-xs text-green-500 mt-1">
                    +12.5% from last month
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-micro-blue dark:bg-micro-blue"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {submodules.map((submodule) => (
          <TabsContent
            key={submodule.id}
            value={submodule.id}
            className="border rounded-lg p-6 bg-card min-h-[400px] dark:bg-micro-dark h-[calc(100vh-320px)] relative"
          >
            {submodule.content ? (
              submodule.content
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 overflow-y-auto absolute inset-0 m-6">
                <h3 className="text-xl font-semibold mb-2">
                  {submodule.label} Content
                </h3>
                <p className="text-muted-foreground max-w-md">
                  This is a placeholder for the {submodule.label.toLowerCase()}{" "}
                  content of the {moduleTitle} module. Actual content will be
                  implemented based on specific requirements.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ContentArea;
