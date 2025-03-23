import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ar";
type Direction = "ltr" | "rtl";

interface LanguageContextType {
  language: Language;
  direction: Direction;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = "en";

// Simple translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    dashboard: "Dashboard",
    design: "Design",
    inventory: "Inventory Management",
    manufacturing: "Manufacturing",
    quotation: "Quotation & Estimation",
    sales: "Sales & Marketing",
    crm: "CRM",
    product: "Product Management",
    delivery: "Delivery & Installation",
    customer: "Customer Service & Warranty",
    accounting: "Accounting & Finance",
    hr: "HR & Payroll",
    web: "Web & Lead Generation",
    supplier: "Supplier & Document Management",
    user: "User Access Control",
    theme: "Theme",
    language: "Language",
    login: "Login",
    logout: "Logout",
    profile: "Profile",
    settings: "Settings",
    search: "Search...",
    modernKitchens: "Modern Kitchens",
  },
  ar: {
    dashboard: "لوحة القيادة",
    design: "التصميم",
    inventory: "إدارة المخزون",
    manufacturing: "التصنيع",
    quotation: "عروض الأسعار والتقديرات",
    sales: "المبيعات والتسويق",
    crm: "إدارة علاقات العملاء",
    product: "إدارة المنتجات",
    delivery: "التوصيل والتركيب",
    customer: "خدمة العملاء والضمان",
    accounting: "المحاسبة والمالية",
    hr: "الموارد البشرية والرواتب",
    web: "الويب وتوليد العملاء المحتملين",
    supplier: "إدارة الموردين والوثائق",
    user: "التحكم في وصول المستخدم",
    theme: "السمة",
    language: "اللغة",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    profile: "الملف الشخصي",
    settings: "الإعدادات",
    search: "بحث...",
    modernKitchens: "المطابخ الحديثة",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get the language from localStorage, default to 'en'
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage === "ar" ? "ar" : "en") as Language;
  });

  const direction: Direction = language === "ar" ? "rtl" : "ltr";
  const isRTL = direction === "rtl";

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Simple translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    direction,
    isRTL,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageProvider;
