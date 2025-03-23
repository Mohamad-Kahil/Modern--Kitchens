import React from "react";

const AccountingModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Accounting & Finance</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Financial Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of financial performance
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Invoicing</h2>
          <p className="text-muted-foreground">
            Create and manage customer invoices
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Expense Tracking</h2>
          <p className="text-muted-foreground">
            Monitor and manage business expenses
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Financial Reports</h2>
          <p className="text-muted-foreground">
            Generate and view financial statements
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Budget Management</h2>
          <p className="text-muted-foreground">
            Create and track departmental budgets
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Tax Management</h2>
          <p className="text-muted-foreground">
            Manage tax calculations and reporting
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingModule;
