import React from "react";

const InventoryModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Stock Overview</h2>
          <p className="text-muted-foreground">
            Monitor current inventory levels and stock status
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Inventory Tracking</h2>
          <p className="text-muted-foreground">
            Track inventory movements and history
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Stock Alerts</h2>
          <p className="text-muted-foreground">
            View low stock alerts and reorder notifications
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Warehouse Management</h2>
          <p className="text-muted-foreground">
            Manage warehouse locations and organization
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Inventory Reports</h2>
          <p className="text-muted-foreground">
            Generate and view inventory reports
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Material Planning</h2>
          <p className="text-muted-foreground">
            Plan material requirements and procurement
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryModule;
