import React from "react";

const HRModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">HR & Payroll</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Employee Directory</h2>
          <p className="text-muted-foreground">
            Manage employee information and profiles
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Payroll Management</h2>
          <p className="text-muted-foreground">
            Process and manage employee payroll
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Time & Attendance</h2>
          <p className="text-muted-foreground">
            Track employee time and attendance
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">
            Benefits Administration
          </h2>
          <p className="text-muted-foreground">
            Manage employee benefits and programs
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Recruitment</h2>
          <p className="text-muted-foreground">
            Manage hiring processes and candidates
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Performance Management</h2>
          <p className="text-muted-foreground">
            Track employee performance and reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRModule;
