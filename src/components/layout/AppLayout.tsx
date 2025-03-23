import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ContentArea from "./ContentArea";
import { useTheme } from "@/context/ThemeContext";

interface AppLayoutProps {
  children?: React.ReactNode;
  onLogout?: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, onLogout }) => {
  // State for sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Get theme from context
  const { theme, toggleTheme } = useTheme();

  // State for language
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [isRTL, setIsRTL] = useState(false);

  // Set default theme to dark on initial load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Get current location to determine active module
  const location = useLocation();
  const pathName = location.pathname;

  // Extract module title from path
  const getModuleTitle = () => {
    const path = pathName.split("/")[1];
    if (!path) return "Dashboard";

    // Convert path to title case
    return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
  };

  // Toggle functions
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    setIsRTL((prev) => !prev);
  };

  // Apply RTL changes
  useEffect(() => {
    // Apply RTL to document
    document.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  // Determine submodules based on current module
  const getSubmodules = () => {
    // This would be dynamic based on the current module
    // For now, return default submodules
    return [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Details" },
      { id: "settings", label: "Settings" },
    ];
  };

  // Determine breadcrumbs based on current path
  const getBreadcrumbs = () => {
    const paths = pathName.split("/").filter(Boolean);
    const crumbs = [{ label: "Home", href: "/" }];

    let breadcrumbPath = "";
    paths.forEach((path) => {
      breadcrumbPath += `/${path}`;
      crumbs.push({
        label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
        href: breadcrumbPath,
      });
    });

    return crumbs;
  };

  return (
    <div
      className={`flex h-screen w-full bg-background dark:bg-micro-medium`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header
          moduleTitle={getModuleTitle()}
          userName="John Doe"
          userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
          isLoggedIn={true}
          onLogout={onLogout || (() => console.log("Logout clicked"))}
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <ContentArea
            moduleTitle={getModuleTitle()}
            submodules={getSubmodules()}
            breadcrumbs={getBreadcrumbs()}
            isRTL={isRTL}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
