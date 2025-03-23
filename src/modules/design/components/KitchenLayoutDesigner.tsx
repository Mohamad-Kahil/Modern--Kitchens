import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Save,
  Download,
  Upload,
  Trash,
  Move,
  Square,
  RotateCw,
} from "lucide-react";

interface KitchenItem {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
}

const KitchenLayoutDesigner: React.FC = () => {
  const { language } = useLanguage();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<KitchenItem[]>([
    {
      id: "wall-1",
      type: "Wall",
      x: 50,
      y: 50,
      width: 400,
      height: 20,
      rotation: 0,
      color: "#888888",
    },
    {
      id: "wall-2",
      type: "Wall",
      x: 50,
      y: 50,
      width: 20,
      height: 300,
      rotation: 0,
      color: "#888888",
    },
    {
      id: "wall-3",
      type: "Wall",
      x: 50,
      y: 350,
      width: 400,
      height: 20,
      rotation: 0,
      color: "#888888",
    },
    {
      id: "wall-4",
      type: "Wall",
      x: 450,
      y: 50,
      width: 20,
      height: 300,
      rotation: 0,
      color: "#888888",
    },
    {
      id: "cab-1",
      type: "Base Cabinet",
      x: 80,
      y: 280,
      width: 100,
      height: 60,
      rotation: 0,
      color: "#e0e0e0",
    },
    {
      id: "cab-2",
      type: "Base Cabinet",
      x: 190,
      y: 280,
      width: 100,
      height: 60,
      rotation: 0,
      color: "#e0e0e0",
    },
    {
      id: "cab-3",
      type: "Wall Cabinet",
      x: 80,
      y: 100,
      width: 100,
      height: 40,
      rotation: 0,
      color: "#d0d0d0",
    },
  ]);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [roomDimensions, setRoomDimensions] = useState({
    width: 500,
    length: 400,
  });

  // Palette items that can be dragged onto the canvas
  const paletteItems = [
    { type: "Wall", width: 100, height: 20, color: "#888888" },
    { type: "Base Cabinet", width: 100, height: 60, color: "#e0e0e0" },
    { type: "Wall Cabinet", width: 100, height: 40, color: "#d0d0d0" },
    { type: "Island", width: 150, height: 80, color: "#c0c0c0" },
    { type: "Appliance", width: 60, height: 60, color: "#a0a0a0" },
  ];

  const handleDragStart = (e: React.MouseEvent, id: string) => {
    if (!canvasRef.current) return;

    const item = items.find((i) => i.id === id);
    if (!item) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - item.x;
    const offsetY = e.clientY - rect.top - item.y;

    setDraggedItem(id);
    setDragOffset({ x: offsetX, y: offsetY });
    setSelectedItem(id);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!draggedItem || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragOffset.x;
    const y = e.clientY - rect.top - dragOffset.y;

    setItems(
      items.map((item) => (item.id === draggedItem ? { ...item, x, y } : item)),
    );
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleAddItem = (
    type: string,
    width: number,
    height: number,
    color: string,
  ) => {
    const newItem: KitchenItem = {
      id: `${type.toLowerCase()}-${Date.now()}`,
      type,
      x: 100,
      y: 100,
      width,
      height,
      rotation: 0,
      color,
    };

    setItems([...items, newItem]);
    setSelectedItem(newItem.id);
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    if (selectedItem === id) {
      setSelectedItem(null);
    }
  };

  const handleRotateItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              rotation: (item.rotation + 90) % 360,
              width: item.height,
              height: item.width,
            }
          : item,
      ),
    );
  };

  const handleSaveLayout = () => {
    // In a real app, this would save to a database
    alert(language === "en" ? "Layout saved!" : "تم حفظ التخطيط!");
  };

  const handleExportLayout = () => {
    // In a real app, this would export to a file
    const dataStr = JSON.stringify(items, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;

    const exportFileDefaultName = "kitchen-layout.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="w-full h-full bg-background flex flex-col md:flex-row gap-6">
      {/* Tools Panel */}
      <div className="w-full md:w-1/4 bg-card rounded-lg shadow-sm p-4 border border-border">
        <h2 className="text-lg font-semibold mb-4">
          {language === "en" ? "Design Tools" : "أدوات التصميم"}
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">
              {language === "en" ? "Room Dimensions" : "أبعاد الغرفة"}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs">
                  {language === "en" ? "Width (cm)" : "العرض (سم)"}
                </label>
                <input
                  type="number"
                  value={roomDimensions.width}
                  onChange={(e) =>
                    setRoomDimensions({
                      ...roomDimensions,
                      width: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full p-1 text-sm rounded-md border border-input bg-background"
                />
              </div>
              <div>
                <label className="text-xs">
                  {language === "en" ? "Length (cm)" : "الطول (سم)"}
                </label>
                <input
                  type="number"
                  value={roomDimensions.length}
                  onChange={(e) =>
                    setRoomDimensions({
                      ...roomDimensions,
                      length: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full p-1 text-sm rounded-md border border-input bg-background"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">
              {language === "en" ? "Components" : "المكونات"}
            </h3>
            <div className="space-y-2">
              {paletteItems.map((item, index) => (
                <div
                  key={index}
                  className="p-2 bg-accent rounded-md cursor-pointer hover:bg-accent/80 flex items-center"
                  onClick={() =>
                    handleAddItem(
                      item.type,
                      item.width,
                      item.height,
                      item.color,
                    )
                  }
                >
                  <div
                    className="w-6 h-6 mr-2 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm">{item.type}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedItem && (
            <div>
              <h3 className="text-sm font-medium mb-2">
                {language === "en" ? "Selected Item" : "العنصر المحدد"}
              </h3>
              <div className="space-y-2">
                {items.find((i) => i.id === selectedItem) && (
                  <>
                    <div className="text-sm">
                      {items.find((i) => i.id === selectedItem)?.type}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRotateItem(selectedItem)}
                      >
                        <RotateCw className="h-4 w-4 mr-1" />
                        {language === "en" ? "Rotate" : "تدوير"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive"
                        onClick={() => handleDeleteItem(selectedItem)}
                      >
                        <Trash className="h-4 w-4 mr-1" />
                        {language === "en" ? "Delete" : "حذف"}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-border">
            <div className="flex space-x-2">
              <Button onClick={handleSaveLayout}>
                <Save className="h-4 w-4 mr-2" />
                {language === "en" ? "Save" : "حفظ"}
              </Button>
              <Button variant="outline" onClick={handleExportLayout}>
                <Download className="h-4 w-4 mr-2" />
                {language === "en" ? "Export" : "تصدير"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="w-full md:w-3/4 bg-card rounded-lg shadow-sm p-4 border border-border">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {language === "en" ? "Kitchen Layout" : "تخطيط المطبخ"}
          </h2>
          <div className="text-sm text-muted-foreground">
            {language === "en"
              ? "Drag items to position"
              : "اسحب العناصر لتحديد الموضع"}
          </div>
        </div>

        <div className="relative w-full h-[500px] border border-border rounded-md bg-accent/20 overflow-hidden">
          {/* Canvas for drag and drop */}
          <div
            ref={canvasRef}
            className="absolute inset-0"
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            {/* Grid lines for reference */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #e0e0e0 1px, transparent 1px), linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {/* Kitchen items */}
            {items.map((item) => (
              <div
                key={item.id}
                className={`absolute cursor-move ${selectedItem === item.id ? "ring-2 ring-primary" : ""}`}
                style={{
                  left: `${item.x}px`,
                  top: `${item.y}px`,
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  backgroundColor: item.color,
                  transform: `rotate(${item.rotation}deg)`,
                  zIndex: selectedItem === item.id ? 10 : 1,
                }}
                onMouseDown={(e) => handleDragStart(e, item.id)}
                onClick={() => setSelectedItem(item.id)}
              >
                <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground overflow-hidden">
                  {item.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Viewer Placeholder */}
        <div className="mt-4 border border-border rounded-md p-4 bg-accent/10">
          <h3 className="text-sm font-medium mb-2">
            {language === "en" ? "3D Preview" : "معاينة ثلاثية الأبعاد"}
          </h3>
          <div className="w-full h-[200px] bg-accent/20 rounded flex items-center justify-center">
            <div className="text-muted-foreground text-sm">
              {language === "en"
                ? "3D Viewer Placeholder"
                : "مكان عرض ثلاثي الأبعاد"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenLayoutDesigner;
