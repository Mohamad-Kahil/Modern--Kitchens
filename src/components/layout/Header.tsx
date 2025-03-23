import React, { useState, useContext } from "react";
import {
  Moon,
  Sun,
  Globe,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  moduleTitle?: string;
  userName?: string;
  userAvatar?: string;
  isLoggedIn?: boolean;
  onLogout?: () => void;
  sidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  moduleTitle = "Dashboard",
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  isLoggedIn = true,
  onLogout = () => console.log("Logout clicked"),
  sidebarCollapsed = true,
  onSidebarToggle = () => {},
}) => {
  // Use the theme context
  const { theme, toggleTheme } = useTheme();

  // Use the language context
  const { language, isRTL, setLanguage } = useLanguage();

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className={`w-full h-18 bg-micro-dark border-b border-border flex items-center justify-between px-6 py-4 ${isRTL ? "flex-row-reverse" : "flex-row"} light:bg-white light:border-gray-200`}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Toggle sidebar"
        >
          {sidebarCollapsed ? (
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
        <h1 className="text-xl font-semibold text-foreground">{moduleTitle}</h1>
      </div>

      <div
        className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* Language Toggle */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
          </Button>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* User Profile */}
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 p-1">
                <Avatar>
                  <AvatarImage src={userAvatar} alt={userName} />
                  <AvatarFallback>
                    {userName.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{userName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {language === "en" ? "My Account" : "حسابي"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className={`h-4 w-4 ${isRTL ? "ml-3" : "mr-3"}`} />
                <span>{language === "en" ? "Profile" : "الملف الشخصي"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className={`h-4 w-4 ${isRTL ? "ml-3" : "mr-3"}`} />
                <span>{language === "en" ? "Logout" : "تسجيل الخروج"}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="default" size="sm">
            {language === "en" ? "Login" : "تسجيل الدخول"}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
