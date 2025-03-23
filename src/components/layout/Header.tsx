import React, { useState, useContext, createContext } from "react";
import { Moon, Sun, Globe, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Create contexts for theme and language if they don't exist yet
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

type LanguageContextType = {
  language: "en" | "ar";
  isRTL: boolean;
  toggleLanguage: () => void;
};

// Create default contexts
const defaultThemeContext: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

const defaultLanguageContext: LanguageContextType = {
  language: "en",
  isRTL: false,
  toggleLanguage: () => {},
};

// Create or use existing contexts
const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);
const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext,
);

interface HeaderProps {
  moduleTitle?: string;
  userName?: string;
  userAvatar?: string;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  moduleTitle = "Dashboard",
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  isLoggedIn = true,
  onLogout = () => console.log("Logout clicked"),
}) => {
  // Local state for theme and language if contexts aren't available
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");

  // Initialize theme on component mount
  React.useEffect(() => {
    // Apply initial theme
    document.documentElement.classList.toggle("dark", localTheme === "dark");
    document.documentElement.classList.toggle("light", localTheme === "light");
  }, [localTheme]);
  const [localLanguage, setLocalLanguage] = useState<"en" | "ar">("en");
  const [localIsRTL, setLocalIsRTL] = useState(false);

  // Import contexts properly
  const { theme, toggleTheme } = useContext(ThemeContext) || {
    theme: localTheme,
    toggleTheme: () => {
      const newTheme = localTheme === "light" ? "dark" : "light";
      setLocalTheme(newTheme);
      // Apply theme to document
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newTheme);
    },
  };

  const {
    language,
    isRTL,
    toggleLanguage: contextToggleLanguage,
  } = useContext(LanguageContext) || {
    language: localLanguage,
    isRTL: localIsRTL,
    toggleLanguage: undefined,
  };

  // Use context toggle if available, otherwise use local toggle
  const toggleLanguage =
    contextToggleLanguage ||
    (() => {
      setLocalLanguage((prev) => (prev === "en" ? "ar" : "en"));
      setLocalIsRTL((prev) => !prev);
    });

  return (
    <header
      className={`w-full h-18 bg-micro-dark border-b border-border flex items-center justify-between px-6 py-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-foreground">{moduleTitle}</h1>
      </div>

      <div
        className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* Language Toggle */}
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {language === "en" ? "EN" : "AR"}
          </span>
          <Switch
            checked={language === "ar"}
            onCheckedChange={toggleLanguage}
            aria-label="Toggle language"
          />
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
