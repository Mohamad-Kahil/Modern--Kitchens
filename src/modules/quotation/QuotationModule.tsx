import React from "react";

const QuotationModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Quotation & Estimation</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Create Quotation</h2>
          <p className="text-muted-foreground">
            Generate new customer quotations
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Quotation History</h2>
          <p className="text-muted-foreground">
            View and manage past quotations
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Cost Estimation</h2>
          <p className="text-muted-foreground">
            Calculate and manage project cost estimates
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Pricing Templates</h2>
          <p className="text-muted-foreground">
            Manage standard pricing templates
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Approval Workflow</h2>
          <p className="text-muted-foreground">
            Manage quotation approval processes
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Quotation Analytics</h2>
          <p className="text-muted-foreground">
            Analyze quotation conversion rates and performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuotationModule;
