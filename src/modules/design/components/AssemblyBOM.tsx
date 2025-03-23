import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Download,
  Printer,
  Search,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface AssemblyItem {
  id: string;
  name: string;
  quantity: number;
  type: string;
}

interface AssemblyComponent {
  id: string;
  name: string;
  type: string;
  items: AssemblyItem[];
}

const AssemblyBOM: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string>("");
  const [expandedComponents, setExpandedComponents] = useState<
    Record<string, boolean>
  >({
    "cab-001": true,
    "cab-002": false,
    "cab-003": false,
  });

  // Dummy data for demonstration
  const assemblyComponents: AssemblyComponent[] = [
    {
      id: "cab-001",
      name: "Base Cabinet 600mm",
      type: "Base Cabinet",
      items: [
        { id: "part-001", name: "Side Panel", quantity: 2, type: "Panel" },
        { id: "part-002", name: "Bottom Panel", quantity: 1, type: "Panel" },
        { id: "part-003", name: "Back Panel", quantity: 1, type: "Panel" },
        { id: "part-004", name: "Drawer Front", quantity: 2, type: "Panel" },
        { id: "part-005", name: "Drawer Side", quantity: 4, type: "Panel" },
        { id: "part-006", name: "Drawer Bottom", quantity: 2, type: "Panel" },
        { id: "part-007", name: "Toe Kick", quantity: 1, type: "Panel" },
        { id: "part-008", name: "Drawer Slide", quantity: 2, type: "Hardware" },
        { id: "part-009", name: "Handle", quantity: 2, type: "Hardware" },
        { id: "part-010", name: "Hinge", quantity: 2, type: "Hardware" },
        { id: "part-011", name: "Shelf Pin", quantity: 8, type: "Hardware" },
        { id: "part-012", name: "Cam Lock", quantity: 8, type: "Hardware" },
        { id: "part-013", name: "Dowel", quantity: 16, type: "Hardware" },
      ],
    },
    {
      id: "cab-002",
      name: "Wall Cabinet 600mm",
      type: "Wall Cabinet",
      items: [
        { id: "part-101", name: "Side Panel", quantity: 2, type: "Panel" },
        { id: "part-102", name: "Top Panel", quantity: 1, type: "Panel" },
        { id: "part-103", name: "Bottom Panel", quantity: 1, type: "Panel" },
        { id: "part-104", name: "Back Panel", quantity: 1, type: "Panel" },
        { id: "part-105", name: "Door", quantity: 1, type: "Panel" },
        { id: "part-106", name: "Shelf", quantity: 2, type: "Panel" },
        { id: "part-107", name: "Hinge", quantity: 2, type: "Hardware" },
        { id: "part-108", name: "Handle", quantity: 1, type: "Hardware" },
        { id: "part-109", name: "Shelf Pin", quantity: 8, type: "Hardware" },
        { id: "part-110", name: "Cam Lock", quantity: 8, type: "Hardware" },
        { id: "part-111", name: "Dowel", quantity: 12, type: "Hardware" },
      ],
    },
    {
      id: "cab-003",
      name: "Tall Cabinet 400mm",
      type: "Tall Cabinet",
      items: [
        { id: "part-201", name: "Side Panel", quantity: 2, type: "Panel" },
        { id: "part-202", name: "Top Panel", quantity: 1, type: "Panel" },
        { id: "part-203", name: "Bottom Panel", quantity: 1, type: "Panel" },
        { id: "part-204", name: "Back Panel", quantity: 1, type: "Panel" },
        { id: "part-205", name: "Door", quantity: 2, type: "Panel" },
        { id: "part-206", name: "Shelf", quantity: 4, type: "Panel" },
        { id: "part-207", name: "Hinge", quantity: 4, type: "Hardware" },
        { id: "part-208", name: "Handle", quantity: 2, type: "Hardware" },
        { id: "part-209", name: "Shelf Pin", quantity: 16, type: "Hardware" },
        { id: "part-210", name: "Cam Lock", quantity: 10, type: "Hardware" },
        { id: "part-211", name: "Dowel", quantity: 20, type: "Hardware" },
      ],
    },
  ];

  const filteredComponents = filter
    ? assemblyComponents.filter(
        (component) =>
          component.name.toLowerCase().includes(filter.toLowerCase()) ||
          component.type.toLowerCase().includes(filter.toLowerCase()) ||
          component.items.some(
            (item) =>
              item.name.toLowerCase().includes(filter.toLowerCase()) ||
              item.type.toLowerCase().includes(filter.toLowerCase()),
          ),
      )
    : assemblyComponents;

  const toggleComponent = (id: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculate total parts by type
  const totalParts = {
    panels: 0,
    hardware: 0,
  };

  assemblyComponents.forEach((component) => {
    component.items.forEach((item) => {
      if (item.type === "Panel") {
        totalParts.panels += item.quantity;
      } else if (item.type === "Hardware") {
        totalParts.hardware += item.quantity;
      }
    });
  });

  return (
    <div className="w-full h-full bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            {language === "en" ? "Assembly BOM" : "قائمة تجميع المواد"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Bill of materials for assembly instructions"
              : "قائمة المواد لتعليمات التجميع"}
          </p>
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === "en" ? "Search..." : "بحث..."}
              className="pl-8 pr-4 py-1 text-sm rounded-md border border-input bg-background w-[200px]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            {language === "en" ? "Print" : "طباعة"}
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            {language === "en" ? "Export" : "تصدير"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <h3 className="font-medium text-lg mb-3">
            {language === "en" ? "Components" : "المكونات"}
          </h3>
          <div className="text-3xl font-bold">{assemblyComponents.length}</div>
          <div className="text-sm text-muted-foreground">
            {language === "en"
              ? "Total cabinet components"
              : "إجمالي مكونات الخزائن"}
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <h3 className="font-medium text-lg mb-3">
            {language === "en" ? "Panels" : "الألواح"}
          </h3>
          <div className="text-3xl font-bold">{totalParts.panels}</div>
          <div className="text-sm text-muted-foreground">
            {language === "en" ? "Total panel parts" : "إجمالي قطع الألواح"}
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <h3 className="font-medium text-lg mb-3">
            {language === "en" ? "Hardware" : "الأجهزة"}
          </h3>
          <div className="text-3xl font-bold">{totalParts.hardware}</div>
          <div className="text-sm text-muted-foreground">
            {language === "en" ? "Total hardware parts" : "إجمالي قطع الأجهزة"}
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-sm border border-border p-4">
          <h3 className="font-medium text-lg mb-3">
            {language === "en" ? "Total Parts" : "إجمالي القطع"}
          </h3>
          <div className="text-3xl font-bold">
            {totalParts.panels + totalParts.hardware}
          </div>
          <div className="text-sm text-muted-foreground">
            {language === "en" ? "All assembly parts" : "جميع قطع التجميع"}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border p-4">
        <h3 className="font-medium text-lg mb-4">
          {language === "en" ? "Assembly Components" : "مكونات التجميع"}
        </h3>

        <div className="space-y-4">
          {filteredComponents.map((component) => (
            <div
              key={component.id}
              className="border border-border rounded-md overflow-hidden"
            >
              <div
                className="flex items-center justify-between p-3 bg-accent/20 cursor-pointer"
                onClick={() => toggleComponent(component.id)}
              >
                <div className="flex items-center">
                  {expandedComponents[component.id] ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  <div>
                    <div className="font-medium">{component.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {component.type}
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  {component.items.length}{" "}
                  {language === "en" ? "parts" : "قطعة"}
                </div>
              </div>

              {expandedComponents[component.id] && (
                <div className="p-3">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {language === "en" ? "Part Name" : "اسم القطعة"}
                        </th>
                        <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {language === "en" ? "Type" : "النوع"}
                        </th>
                        <th className="py-2 px-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {language === "en" ? "Quantity" : "الكمية"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {component.items.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-border/50 hover:bg-accent/10"
                        >
                          <td className="py-2 px-3 text-sm">{item.name}</td>
                          <td className="py-2 px-3 text-sm">{item.type}</td>
                          <td className="py-2 px-3 text-sm text-center">
                            {item.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 flex justify-center">
                    <div className="w-full max-w-md p-4 bg-accent/10 rounded-md text-center">
                      <div className="text-sm text-muted-foreground mb-2">
                        {language === "en"
                          ? "Assembly Diagram"
                          : "رسم تخطيطي للتجميع"}
                      </div>
                      <div className="w-full h-[150px] bg-accent/20 rounded flex items-center justify-center">
                        <div className="text-muted-foreground text-sm">
                          {language === "en"
                            ? "Assembly diagram placeholder"
                            : "مكان الرسم التخطيطي للتجميع"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            {language === "en"
              ? "No components match your search"
              : "لا توجد مكونات تطابق بحثك"}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssemblyBOM;
