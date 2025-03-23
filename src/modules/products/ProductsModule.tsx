import React from "react";

const ProductsModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Catalog</h2>
          <p className="text-muted-foreground">
            Browse and manage product listings
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Categories</h2>
          <p className="text-muted-foreground">
            Organize products into categories
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Development</h2>
          <p className="text-muted-foreground">
            Track new product development lifecycle
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Specifications</h2>
          <p className="text-muted-foreground">
            Manage technical specifications and details
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Pricing</h2>
          <p className="text-muted-foreground">
            Set and manage product pricing strategies
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Product Analytics</h2>
          <p className="text-muted-foreground">
            Analyze product performance and trends
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsModule;
