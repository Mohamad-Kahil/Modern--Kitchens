import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Palette,
  Package,
  Factory,
  FileText,
  ShoppingCart,
  Users,
  Box,
  Truck,
  HeadphonesIcon,
  DollarSign,
  UserCog,
  Globe,
  FileArchive,
  Shield,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// Create a context for language and theme
// These will be properly implemented in their respective context files
const LanguageContext = React.createContext({ isRTL: false });
const ThemeContext = React.createContext({ theme: "light" });

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const { isRTL } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle();
  };

  // Module definitions with icons and routes
  const modules = [
    { id: 1, name: "Dashboard", icon: <Home size={20} />, route: "/dashboard" },
    { id: 2, name: "Design", icon: <Palette size={20} />, route: "/design" },
    {
      id: 3,
      name: "Inventory Management",
      icon: <Package size={20} />,
      route: "/inventory",
    },
    {
      id: 4,
      name: "Manufacturing",
      icon: <Factory size={20} />,
      route: "/manufacturing",
    },
    {
      id: 5,
      name: "Quotation & Estimation",
      icon: <FileText size={20} />,
      route: "/quotation",
    },
    {
      id: 6,
      name: "Sales & Marketing",
      icon: <ShoppingCart size={20} />,
      route: "/sales",
    },
    { id: 7, name: "CRM", icon: <Users size={20} />, route: "/crm" },
    {
      id: 8,
      name: "Product Management",
      icon: <Box size={20} />,
      route: "/products",
    },
    {
      id: 9,
      name: "Delivery & Installation",
      icon: <Truck size={20} />,
      route: "/delivery",
    },
    {
      id: 10,
      name: "Customer Service & Warranty",
      icon: <HeadphonesIcon size={20} />,
      route: "/customer-service",
    },
    {
      id: 11,
      name: "Accounting & Finance",
      icon: <DollarSign size={20} />,
      route: "/accounting",
    },
    { id: 12, name: "HR & Payroll", icon: <UserCog size={20} />, route: "/hr" },
    {
      id: 13,
      name: "Web & Lead Generation",
      icon: <Globe size={20} />,
      route: "/web",
    },
    {
      id: 14,
      name: "Supplier & Document Management",
      icon: <FileArchive size={20} />,
      route: "/supplier",
    },
    {
      id: 15,
      name: "User Access Control",
      icon: <Shield size={20} />,
      route: "/user-access",
    },
  ];

  return (
    <div
      className={`h-full min-h-screen ${isCollapsed ? "w-20" : "w-72"} transition-all duration-300 bg-micro-dark border-r border-border flex flex-col`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Logo and Company Name */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-micro-blue rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl">
            MK
          </div>
          {!isCollapsed && (
            <div className="ml-3 mr-3 font-semibold text-foreground">
              Modern Kitchens
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-muted-foreground hover:text-foreground"
        >
          {isCollapsed ? (
            isRTL ? (
              <ChevronLeft size={18} />
            ) : (
              <ChevronRight size={18} />
            )
          ) : isRTL ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </Button>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden p-2 border-b border-border">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={toggleSidebar}
        >
          <Menu size={16} className={isRTL ? "ml-2" : "mr-2"} />
          {!isCollapsed && "Menu"}
        </Button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-1">
        <nav>
          <ul className="space-y-0.5 px-2">
            {modules.map((module) => (
              <li key={module.id}>
                {isCollapsed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to={module.route}
                          className="flex items-center justify-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {module.icon}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side={isRTL ? "left" : "right"}>
                        {module.name}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Link
                    to={module.route}
                    className="flex items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span className={isRTL ? "ml-3" : "mr-3"}>
                      {module.icon}
                    </span>
                    <span className="text-[0.8em] truncate">{module.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        {!isCollapsed && (
          <div className="text-center">© 2023 Modern Kitchens</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
