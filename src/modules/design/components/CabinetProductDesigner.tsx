import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Save, Plus, Trash } from "lucide-react";

interface CabinetProduct {
  id: string;
  name: string;
  type: string;
  width: number;
  height: number;
  depth: number;
  material: string;
  color: string;
  price: number;
}

const CabinetProductDesigner: React.FC = () => {
  const { language } = useLanguage();
  const [products, setProducts] = useState<CabinetProduct[]>([
    {
      id: "cab-001",
      name: "Base Cabinet",
      type: "Base",
      width: 600,
      height: 720,
      depth: 580,
      material: "MDF",
      color: "White",
      price: 250,
    },
    {
      id: "cab-002",
      name: "Wall Cabinet",
      type: "Wall",
      width: 600,
      height: 720,
      depth: 300,
      material: "Particle Board",
      color: "Oak",
      price: 180,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<CabinetProduct | null>(
    null,
  );
  const [formData, setFormData] = useState<Partial<CabinetProduct>>({
    name: "",
    type: "Base",
    width: 600,
    height: 720,
    depth: 580,
    material: "MDF",
    color: "White",
    price: 0,
  });

  const handleSelectProduct = (product: CabinetProduct) => {
    setSelectedProduct(product);
    setFormData(product);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "width" ||
        name === "height" ||
        name === "depth" ||
        name === "price"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSave = () => {
    if (selectedProduct) {
      // Update existing product
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...formData } : p,
        ),
      );
    } else {
      // Add new product
      const newProduct = {
        id: `cab-${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(3, "0")}`,
        ...(formData as CabinetProduct),
      };
      setProducts([...products, newProduct]);
    }

    // Reset form
    setSelectedProduct(null);
    setFormData({
      name: "",
      type: "Base",
      width: 600,
      height: 720,
      depth: 580,
      material: "MDF",
      color: "White",
      price: 0,
    });
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
    if (selectedProduct && selectedProduct.id === id) {
      setSelectedProduct(null);
      setFormData({
        name: "",
        type: "Base",
        width: 600,
        height: 720,
        depth: 580,
        material: "MDF",
        color: "White",
        price: 0,
      });
    }
  };

  const handleNewProduct = () => {
    setSelectedProduct(null);
    setFormData({
      name: "",
      type: "Base",
      width: 600,
      height: 720,
      depth: 580,
      material: "MDF",
      color: "White",
      price: 0,
    });
  };

  return (
    <div className="w-full h-full bg-micro-darker flex flex-col md:flex-row gap-6">
      {/* Product List */}
      <div className="w-full md:w-1/5 bg-micro-medium rounded-lg shadow-md p-4 border border-micro-blue/30">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">
            {language === "en" ? "Cabinet Products" : "منتجات الخزائن"}
          </h2>
          <Button
            size="sm"
            onClick={handleNewProduct}
            className="bg-micro-blue hover:bg-micro-blue/80 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            {language === "en" ? "New" : "جديد"}
          </Button>
        </div>
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {products.map((product) => (
            <div
              key={product.id}
              className={`p-3 rounded-md cursor-pointer transition-colors ${selectedProduct?.id === product.id ? "bg-micro-blue text-white border border-micro-blue/70" : "bg-micro-dark hover:bg-micro-dark/80 text-white"}`}
              onClick={() => handleSelectProduct(product)}
            >
              <div className="flex justify-between">
                <h3 className="font-medium">{product.name}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-red-400 hover:text-red-300 hover:bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(product.id);
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-blue-200">
                {product.type} - {product.width}x{product.height}x
                {product.depth}mm
              </div>
              <div className="text-sm font-medium mt-1 text-green-300">
                ${product.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Editor */}
      <div className="w-full md:w-4/5 bg-micro-medium rounded-lg shadow-md p-4 border border-micro-blue/30">
        <h2 className="text-lg font-semibold mb-4 text-white border-b border-micro-blue/30 pb-2">
          {selectedProduct
            ? language === "en"
              ? "Edit Cabinet"
              : "تعديل الخزانة"
            : language === "en"
              ? "New Cabinet"
              : "خزانة جديدة"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Name" : "الاسم"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Type" : "النوع"}
              </label>
              <select
                name="type"
                value={formData.type || "Base"}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              >
                <option value="Base">
                  {language === "en" ? "Base" : "قاعدة"}
                </option>
                <option value="Wall">
                  {language === "en" ? "Wall" : "جدار"}
                </option>
                <option value="Tall">
                  {language === "en" ? "Tall" : "طويل"}
                </option>
                <option value="Island">
                  {language === "en" ? "Island" : "جزيرة"}
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Material" : "المادة"}
              </label>
              <select
                name="material"
                value={formData.material || "MDF"}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              >
                <option value="MDF">MDF</option>
                <option value="Particle Board">
                  {language === "en" ? "Particle Board" : "ألواح جسيمات"}
                </option>
                <option value="Plywood">
                  {language === "en" ? "Plywood" : "خشب رقائقي"}
                </option>
                <option value="Solid Wood">
                  {language === "en" ? "Solid Wood" : "خشب صلب"}
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Color" : "اللون"}
              </label>
              <input
                type="text"
                name="color"
                value={formData.color || ""}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Width (mm)" : "العرض (مم)"}
              </label>
              <input
                type="number"
                name="width"
                value={formData.width || 0}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Height (mm)" : "الارتفاع (مم)"}
              </label>
              <input
                type="number"
                name="height"
                value={formData.height || 0}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Depth (mm)" : "العمق (مم)"}
              </label>
              <input
                type="number"
                name="depth"
                value={formData.depth || 0}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-200">
                {language === "en" ? "Price ($)" : "السعر ($)"}
              </label>
              <input
                type="number"
                name="price"
                value={formData.price || 0}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md border border-micro-blue/50 bg-micro-dark text-white focus:border-micro-blue focus:ring-1 focus:ring-micro-blue"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <Save className="h-4 w-4 mr-2" />
            {language === "en" ? "Save" : "حفظ"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CabinetProductDesigner;
