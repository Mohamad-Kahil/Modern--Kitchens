import React from "react";
import { cn } from "@/lib/utils";

interface ContentAreaProps {
  moduleTitle?: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  isRTL?: boolean;
  children?: React.ReactNode;
}

const ContentArea = ({
  moduleTitle = "",
  breadcrumbs = [],
  isRTL = false,
  children,
}: ContentAreaProps) => {
  return (
    <div className="flex flex-col w-full h-full bg-background p-2 overflow-hidden dark:bg-micro-medium light:bg-white">
      {children}
    </div>
  );
};

export default ContentArea;
