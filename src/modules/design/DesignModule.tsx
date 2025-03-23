import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";
import CabinetProductDesigner from "./components/CabinetProductDesigner";
import KitchenLayoutDesigner from "./components/KitchenLayoutDesigner";
import QuotationBOQGenerator from "./components/QuotationBOQGenerator";
import CuttingListGenerator from "./components/CuttingListGenerator";
import AssemblyBOM from "./components/AssemblyBOM";

const DesignModule: React.FC = () => {
  const { isRTL, language } = useLanguage();

  const tabs = [
    {
      id: "cabinet-designer",
      label:
        language === "en" ? "Cabinet Product Designer" : "مصمم منتجات الخزائن",
      content: <CabinetProductDesigner />,
    },
    {
      id: "kitchen-layout",
      label:
        language === "en" ? "Kitchen Layout Designer" : "مصمم تخطيط المطبخ",
      content: <KitchenLayoutDesigner />,
    },
    {
      id: "quotation-boq",
      label:
        language === "en"
          ? "Quotation & BOQ Generator"
          : "مولد عروض الأسعار وجداول الكميات",
      content: <QuotationBOQGenerator />,
    },
    {
      id: "cutting-list",
      label: language === "en" ? "Cutting List Generator" : "مولد قوائم القطع",
      content: <CuttingListGenerator />,
    },
    {
      id: "assembly-bom",
      label: language === "en" ? "Assembly BOM" : "قائمة تجميع المواد",
      content: <AssemblyBOM />,
    },
  ];

  return (
    <div className="w-full h-full p-6 bg-background">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">
          {language === "en" ? "Design Module" : "وحدة التصميم"}
        </h1>
        <p className="text-muted-foreground">
          {language === "en"
            ? "Design and customize kitchen products and layouts"
            : "تصميم وتخصيص منتجات وتخطيطات المطبخ"}
        </p>
      </div>

      <Tabs defaultValue="cabinet-designer" className="w-full">
        <TabsList className="mb-4 w-full flex flex-wrap justify-start gap-1">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="w-full">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DesignModule;
