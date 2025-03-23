import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download, Printer, RefreshCw } from "lucide-react";

const QuotationBOQGenerator: React.FC = () => {
  const { language } = useLanguage();

  // Dummy data for demonstration
  const quotationItems = [
    {
      id: 1,
      category: "Cabinets",
      description: "Base Cabinet 600mm",
      quantity: 5,
      unitPrice: 250,
      total: 1250,
    },
    {
      id: 2,
      category: "Cabinets",
      description: "Wall Cabinet 600mm",
      quantity: 4,
      unitPrice: 180,
      total: 720,
    },
    {
      id: 3,
      category: "Cabinets",
      description: "Tall Cabinet 400mm",
      quantity: 1,
      unitPrice: 350,
      total: 350,
    },
    {
      id: 4,
      category: "Countertops",
      description: "Granite Countertop",
      quantity: 3.5,
      unitPrice: 300,
      total: 1050,
    },
    {
      id: 5,
      category: "Hardware",
      description: "Cabinet Handles",
      quantity: 15,
      unitPrice: 8,
      total: 120,
    },
    {
      id: 6,
      category: "Hardware",
      description: "Drawer Slides",
      quantity: 8,
      unitPrice: 15,
      total: 120,
    },
    {
      id: 7,
      category: "Appliances",
      description: "Kitchen Sink",
      quantity: 1,
      unitPrice: 120,
      total: 120,
    },
    {
      id: 8,
      category: "Appliances",
      description: "Faucet",
      quantity: 1,
      unitPrice: 80,
      total: 80,
    },
    {
      id: 9,
      category: "Labor",
      description: "Installation",
      quantity: 1,
      unitPrice: 500,
      total: 500,
    },
  ];

  const calculateSubtotal = () => {
    return quotationItems.reduce((sum, item) => sum + item.total, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.15; // 15% tax
  const total = subtotal + tax;

  return (
    <div className="w-full h-full bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            {language === "en"
              ? "Quotation & BOQ Generator"
              : "مولد عروض الأسعار وجداول الكميات"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Generate detailed quotations and bills of quantities"
              : "إنشاء عروض أسعار مفصلة وجداول كميات"}
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

      <div className="bg-card rounded-lg shadow-sm border border-border p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              {language === "en" ? "Modern Kitchens" : "المطابخ الحديثة"}
            </h3>
            <p className="text-sm text-muted-foreground">
              123 Kitchen Street
              <br />
              Design District
              <br />
              City, Country
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <h3 className="font-semibold text-lg mb-2">
              {language === "en" ? "Quotation" : "عرض سعر"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === "en" ? "Quotation #" : "رقم عرض السعر: "}{" "}
              Q-2023-0042
              <br />
              {language === "en" ? "Date: " : "التاريخ: "}{" "}
              {new Date().toLocaleDateString()}
              <br />
              {language === "en" ? "Valid until: " : "صالح حتى: "}{" "}
              {new Date(
                Date.now() + 30 * 24 * 60 * 60 * 1000,
              ).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">
            {language === "en" ? "Client Information" : "معلومات العميل"}
          </h4>
          <div className="bg-accent/20 p-3 rounded-md">
            <p className="font-medium">
              {language === "en" ? "John Smith" : "جون سميث"}
            </p>
            <p className="text-sm text-muted-foreground">
              456 Client Avenue
              <br />
              Residential Area
              <br />
              City, Country
              <br />
              {language === "en" ? "Phone: " : "الهاتف: "} +1 234 567 890
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">
            {language === "en" ? "Project Details" : "تفاصيل المشروع"}
          </h4>
          <div className="bg-accent/20 p-3 rounded-md">
            <p className="font-medium">
              {language === "en"
                ? "Modern Kitchen Renovation"
                : "تجديد المطبخ الحديث"}
            </p>
            <p className="text-sm text-muted-foreground">
              {language === "en"
                ? "Complete kitchen renovation including cabinets, countertops, and appliances installation."
                : "تجديد كامل للمطبخ بما في ذلك الخزائن وأسطح العمل وتركيب الأجهزة."}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 px-4 text-left">
                  {language === "en" ? "Category" : "الفئة"}
                </th>
                <th className="py-2 px-4 text-left">
                  {language === "en" ? "Description" : "الوصف"}
                </th>
                <th className="py-2 px-4 text-right">
                  {language === "en" ? "Quantity" : "الكمية"}
                </th>
                <th className="py-2 px-4 text-right">
                  {language === "en" ? "Unit Price" : "سعر الوحدة"}
                </th>
                <th className="py-2 px-4 text-right">
                  {language === "en" ? "Total" : "المجموع"}
                </th>
              </tr>
            </thead>
            <tbody>
              {quotationItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-border/50 hover:bg-accent/10"
                >
                  <td className="py-2 px-4">{item.category}</td>
                  <td className="py-2 px-4">{item.description}</td>
                  <td className="py-2 px-4 text-right">{item.quantity}</td>
                  <td className="py-2 px-4 text-right">
                    ${item.unitPrice.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 text-right">
                    ${item.total.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}></td>
                <td className="py-2 px-4 text-right font-medium">
                  {language === "en" ? "Subtotal" : "المجموع الفرعي"}
                </td>
                <td className="py-2 px-4 text-right">${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="py-2 px-4 text-right font-medium">
                  {language === "en" ? "Tax (15%)" : "الضريبة (15%)"}
                </td>
                <td className="py-2 px-4 text-right">${tax.toFixed(2)}</td>
              </tr>
              <tr className="border-t border-border">
                <td colSpan={3}></td>
                <td className="py-2 px-4 text-right font-bold">
                  {language === "en" ? "Total" : "المجموع الكلي"}
                </td>
                <td className="py-2 px-4 text-right font-bold">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <h4 className="font-medium mb-2">
            {language === "en" ? "Terms & Conditions" : "الشروط والأحكام"}
          </h4>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {language === "en"
                ? "Quotation valid for 30 days from the date of issue."
                : "عرض السعر صالح لمدة 30 يومًا من تاريخ الإصدار."}
            </li>
            <li>
              {language === "en"
                ? "50% advance payment required to begin work."
                : "مطلوب دفعة مقدمة بنسبة 50٪ لبدء العمل."}
            </li>
            <li>
              {language === "en"
                ? "Delivery timeline: 4-6 weeks after confirmation."
                : "الجدول الزمني للتسليم: 4-6 أسابيع بعد التأكيد."}
            </li>
            <li>
              {language === "en"
                ? "Warranty: 2 years on cabinets, 1 year on hardware."
                : "الضمان: سنتان على الخزائن، سنة واحدة على الأجهزة."}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuotationBOQGenerator;
