import React from "react";

const SalesModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Sales & Marketing</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Sales Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of sales performance and metrics
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Order Management</h2>
          <p className="text-muted-foreground">
            Track and manage customer orders
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Marketing Campaigns</h2>
          <p className="text-muted-foreground">
            Plan and track marketing initiatives
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Sales Pipeline</h2>
          <p className="text-muted-foreground">
            Monitor sales opportunities and pipeline
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Promotions</h2>
          <p className="text-muted-foreground">
            Manage special offers and discounts
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Sales Analytics</h2>
          <p className="text-muted-foreground">
            Analyze sales trends and performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesModule;
