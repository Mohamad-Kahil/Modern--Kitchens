import React from "react";

const CRMModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">
        Customer Relationship Management
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Customer Database</h2>
          <p className="text-muted-foreground">
            Manage customer information and profiles
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Lead Management</h2>
          <p className="text-muted-foreground">Track and convert sales leads</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Customer Interactions</h2>
          <p className="text-muted-foreground">
            Log and track customer communications
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Customer Segmentation</h2>
          <p className="text-muted-foreground">
            Group customers based on characteristics
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Customer Feedback</h2>
          <p className="text-muted-foreground">
            Collect and analyze customer feedback
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Customer Analytics</h2>
          <p className="text-muted-foreground">
            Analyze customer behavior and trends
          </p>
        </div>
      </div>
    </div>
  );
};

export default CRMModule;
