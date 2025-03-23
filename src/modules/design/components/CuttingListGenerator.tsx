import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download, Printer, RefreshCw, Filter, Search } from "lucide-react";

interface CuttingItem {
  id: number;
  material: string;
  thickness: number;
  width: number;
  length: number;
  quantity: number;
  edgeBanding: string;
  label: string;
  cabinet: string;
}

const CuttingListGenerator: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string>("");

  // Dummy data for demonstration
  const cuttingItems: CuttingItem[] = [
    {
      id: 1,
      material: "MDF",
      thickness: 18,
      width: 600,
      length: 720,
      quantity: 2,
      edgeBanding: "Front",
      label: "Side Panel",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 2,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 720,
      quantity: 1,
      edgeBanding: "None",
      label: "Back Panel",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 3,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 600,
      quantity: 1,
      edgeBanding: "Front",
      label: "Bottom",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 4,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 150,
      quantity: 2,
      edgeBanding: "Front",
      label: "Drawer Front",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 5,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 100,
      quantity: 1,
      edgeBanding: "Front",
      label: "Toe Kick",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 6,
      material: "Particle Board",
      thickness: 16,
      width: 500,
      length: 150,
      quantity: 2,
      edgeBanding: "None",
      label: "Drawer Side",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 7,
      material: "Particle Board",
      thickness: 16,
      width: 500,
      length: 564,
      quantity: 2,
      edgeBanding: "None",
      label: "Drawer Bottom",
      cabinet: "Base Cabinet 600mm",
    },
    {
      id: 8,
      material: "MDF",
      thickness: 18,
      width: 600,
      length: 720,
      quantity: 2,
      edgeBanding: "Front",
      label: "Side Panel",
      cabinet: "Wall Cabinet 600mm",
    },
    {
      id: 9,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 720,
      quantity: 1,
      edgeBanding: "None",
      label: "Back Panel",
      cabinet: "Wall Cabinet 600mm",
    },
    {
      id: 10,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 300,
      quantity: 2,
      edgeBanding: "Front",
      label: "Top/Bottom",
      cabinet: "Wall Cabinet 600mm",
    },
    {
      id: 11,
      material: "MDF",
      thickness: 18,
      width: 564,
      length: 720,
      quantity: 1,
      edgeBanding: "Front, Top",
      label: "Door",
      cabinet: "Wall Cabinet 600mm",
    },
  ];

  const filteredItems = filter
    ? cuttingItems.filter(
        (item) =>
          item.material.toLowerCase().includes(filter.toLowerCase()) ||
          item.label.toLowerCase().includes(filter.toLowerCase()) ||
          item.cabinet.toLowerCase().includes(filter.toLowerCase()),
      )
    : cuttingItems;

  // Group by material and thickness for summary
  const materialSummary: Record<
    string,
    { totalArea: number; totalPieces: number }
  > = {};

  cuttingItems.forEach((item) => {
    const key = `${item.material} ${item.thickness}mm`;
    const area = (item.width * item.length * item.quantity) / 1000000; // Convert to square meters

    if (!materialSummary[key]) {
      materialSummary[key] = { totalArea: 0, totalPieces: 0 };
    }

    materialSummary[key].totalArea += area;
    materialSummary[key].totalPieces += item.quantity;
  });

  return (
    <div className="w-full h-full bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            {language === "en" ? "Cutting List Generator" : "مولد قوائم القطع"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Generate detailed cutting lists for manufacturing"
              : "إنشاء قوائم قطع مفصلة للتصنيع"}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            {language === "en" ? "Generate" : "إنشاء"}
          </Button>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Material Summary */}
        <div className="md:col-span-1 bg-card rounded-lg shadow-sm border border-border p-4">
          <h3 className="font-medium text-lg mb-3">
            {language === "en" ? "Material Summary" : "ملخص المواد"}
          </h3>
          <div className="space-y-3">
            {Object.entries(materialSummary).map(([material, data], index) => (
              <div key={index} className="p-3 bg-accent/20 rounded-md">
                <div className="font-medium">{material}</div>
                <div className="grid grid-cols-2 text-sm mt-1">
                  <div>
                    <span className="text-muted-foreground">
                      {language === "en" ? "Pieces: " : "القطع: "}
                    </span>
                    {data.totalPieces}
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {language === "en" ? "Area: " : "المساحة: "}
                    </span>
                    {data.totalArea.toFixed(2)} m²
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cutting List */}
        <div className="md:col-span-2 bg-card rounded-lg shadow-sm border border-border p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg">
              {language === "en" ? "Cutting List" : "قائمة القطع"}
            </h3>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  language === "en" ? "Filter items..." : "تصفية العناصر..."
                }
                className="pl-8 pr-4 py-1 text-sm rounded-md border border-input bg-background w-[200px]"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Material" : "المادة"}
                  </th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Dimensions (mm)" : "الأبعاد (مم)"}
                  </th>
                  <th className="py-2 px-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Qty" : "الكمية"}
                  </th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Edge Banding" : "شريط الحواف"}
                  </th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Label" : "التسمية"}
                  </th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Cabinet" : "الخزانة"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-border/50 hover:bg-accent/10"
                  >
                    <td className="py-2 px-3 text-sm">
                      <div>{item.material}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.thickness}mm
                      </div>
                    </td>
                    <td className="py-2 px-3 text-sm">
                      {item.width} × {item.length}
                    </td>
                    <td className="py-2 px-3 text-sm text-center">
                      {item.quantity}
                    </td>
                    <td className="py-2 px-3 text-sm">
                      {item.edgeBanding || "—"}
                    </td>
                    <td className="py-2 px-3 text-sm">{item.label}</td>
                    <td className="py-2 px-3 text-sm">{item.cabinet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            {language === "en"
              ? `Showing ${filteredItems.length} of ${cuttingItems.length} items`
              : `عرض ${filteredItems.length} من ${cuttingItems.length} عنصر`}
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border p-4">
        <h3 className="font-medium text-lg mb-3">
          {language === "en" ? "Optimization Preview" : "معاينة التحسين"}
        </h3>
        <div className="w-full h-[200px] bg-accent/20 rounded flex items-center justify-center">
          <div className="text-muted-foreground text-sm">
            {language === "en"
              ? "Panel optimization visualization will appear here"
              : "ستظهر هنا معاينة تحسين الألواح"}
          </div>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          {language === "en"
            ? "The optimization algorithm arranges cutting patterns to minimize waste. Click 'Generate' to calculate the optimal cutting layout."
            : "تقوم خوارزمية التحسين بترتيب أنماط القطع لتقليل الهدر. انقر فوق 'إنشاء' لحساب تخطيط القطع الأمثل."}
        </div>
      </div>
    </div>
  );
};

export default CuttingListGenerator;
