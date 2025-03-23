import React from "react";

const CustomerServiceModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Customer Service</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Support Tickets</h2>
          <p className="text-muted-foreground">
            Manage customer support requests
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Service Scheduling</h2>
          <p className="text-muted-foreground">
            Schedule service and maintenance visits
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Warranty Claims</h2>
          <p className="text-muted-foreground">
            Process and track warranty claims
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Customer Feedback</h2>
          <p className="text-muted-foreground">
            Collect and manage customer feedback
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Knowledge Base</h2>
          <p className="text-muted-foreground">
            Access support documentation and resources
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Service Analytics</h2>
          <p className="text-muted-foreground">
            Analyze service performance and metrics
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceModule;
