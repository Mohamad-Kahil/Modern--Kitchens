import React from "react";

const UserAccessModule = () => {
  return (
    <div className="p-6 bg-background">
      <h1 className="text-2xl font-bold mb-6">User Access Control</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <p className="text-muted-foreground">
            Manage system users and accounts
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Role Management</h2>
          <p className="text-muted-foreground">Define and assign user roles</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Permission Settings</h2>
          <p className="text-muted-foreground">
            Configure access permissions for roles
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Access Logs</h2>
          <p className="text-muted-foreground">
            View system access and activity logs
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">Security Settings</h2>
          <p className="text-muted-foreground">
            Configure system security parameters
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-semibold mb-2">User Profiles</h2>
          <p className="text-muted-foreground">
            Manage user profile information
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAccessModule;
