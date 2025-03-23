import React from "react";

const DeliveryModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">Delivery & Installation</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Delivery Schedule</h2>
          <p className="text-muted-foreground">
            Plan and manage delivery timelines
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Installation Planning</h2>
          <p className="text-muted-foreground">
            Schedule and coordinate installations
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Delivery Tracking</h2>
          <p className="text-muted-foreground">
            Monitor delivery status and location
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Installation Teams</h2>
          <p className="text-muted-foreground">
            Manage installation personnel and teams
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Delivery Reports</h2>
          <p className="text-muted-foreground">
            Generate and view delivery performance reports
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Post-Installation</h2>
          <p className="text-muted-foreground">
            Manage post-installation follow-ups
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryModule;
