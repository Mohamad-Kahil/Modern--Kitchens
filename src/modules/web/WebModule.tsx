import React from "react";

const WebModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Website Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Website Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of website performance
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Content Management</h2>
          <p className="text-muted-foreground">
            Manage website content and pages
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Catalog</h2>
          <p className="text-muted-foreground">
            Manage online product listings
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Online Inquiries</h2>
          <p className="text-muted-foreground">
            Manage customer inquiries from website
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">SEO Management</h2>
          <p className="text-muted-foreground">
            Optimize website for search engines
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <p className="text-muted-foreground">
            Track website traffic and user behavior
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebModule;
