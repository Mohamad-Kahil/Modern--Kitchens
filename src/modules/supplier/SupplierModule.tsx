import React from "react";

const SupplierModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Supplier Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Supplier Directory</h2>
          <p className="text-muted-foreground">
            Manage supplier information and profiles
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Purchase Orders</h2>
          <p className="text-muted-foreground">
            Create and manage purchase orders
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Supplier Performance</h2>
          <p className="text-muted-foreground">
            Track and evaluate supplier performance
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Contract Management</h2>
          <p className="text-muted-foreground">
            Manage supplier contracts and agreements
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Supplier Invoices</h2>
          <p className="text-muted-foreground">
            Process and manage supplier invoices
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Supplier Analytics</h2>
          <p className="text-muted-foreground">
            Analyze supplier relationships and spending
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplierModule;
