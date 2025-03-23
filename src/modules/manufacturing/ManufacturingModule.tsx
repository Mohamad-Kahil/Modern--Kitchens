import React from "react";

const ManufacturingModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Manufacturing</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Production Planning</h2>
          <p className="text-muted-foreground">
            Schedule and plan production activities
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Work Orders</h2>
          <p className="text-muted-foreground">
            Manage and track manufacturing work orders
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Quality Control</h2>
          <p className="text-muted-foreground">
            Monitor and ensure product quality standards
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Machine Maintenance</h2>
          <p className="text-muted-foreground">
            Schedule and track equipment maintenance
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Production Reports</h2>
          <p className="text-muted-foreground">
            Generate and view manufacturing reports
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Resource Allocation</h2>
          <p className="text-muted-foreground">
            Manage manufacturing resources and capacity
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingModule;
