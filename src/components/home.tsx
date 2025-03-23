import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LoginForm from "./auth/LoginForm";
import DashboardModule from "../modules/dashboard/DashboardModule";

interface HomeProps {
  defaultAuthenticated?: boolean;
}

const Home = ({ defaultAuthenticated = false }: HomeProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(defaultAuthenticated);
  const location = useLocation();

  // Check for authentication on mount
  useEffect(() => {
    // In a real app, you would check for a valid token in localStorage or cookies
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = () => {
    // In a real app, you would store the token received from the backend
    localStorage.setItem("authToken", "demo-token");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route
          path="login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <div className="flex items-center justify-center min-h-screen bg-background p-4">
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              </div>
            )
          }
        />
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <AppLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="dashboard" element={<DashboardModule />} />
                  <Route
                    path="design"
                    element={<PlaceholderModule title="Design" />}
                  />
                  <Route
                    path="inventory"
                    element={<PlaceholderModule title="Inventory Management" />}
                  />
                  <Route
                    path="manufacturing"
                    element={<PlaceholderModule title="Manufacturing" />}
                  />
                  <Route
                    path="quotation"
                    element={
                      <PlaceholderModule title="Quotation & Estimation" />
                    }
                  />
                  <Route
                    path="sales"
                    element={<PlaceholderModule title="Sales & Marketing" />}
                  />
                  <Route
                    path="crm"
                    element={<PlaceholderModule title="CRM" />}
                  />
                  <Route
                    path="product"
                    element={<PlaceholderModule title="Product Management" />}
                  />
                  <Route
                    path="delivery"
                    element={
                      <PlaceholderModule title="Delivery & Installation" />
                    }
                  />
                  <Route
                    path="customer"
                    element={
                      <PlaceholderModule title="Customer Service & Warranty" />
                    }
                  />
                  <Route
                    path="accounting"
                    element={<PlaceholderModule title="Accounting & Finance" />}
                  />
                  <Route
                    path="hr"
                    element={<PlaceholderModule title="HR & Payroll" />}
                  />
                  <Route
                    path="web"
                    element={
                      <PlaceholderModule title="Web & Lead Generation" />
                    }
                  />
                  <Route
                    path="supplier"
                    element={
                      <PlaceholderModule title="Supplier & Document Management" />
                    }
                  />
                  <Route
                    path="user"
                    element={<PlaceholderModule title="User Access Control" />}
                  />
                  <Route
                    path=""
                    element={<Navigate to="dashboard" replace />}
                  />
                </Routes>
              </AppLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

// Placeholder component for modules that haven't been implemented yet
const PlaceholderModule = ({ title = "Module" }: { title?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-background">
      <div className="text-6xl text-muted-foreground mb-4">🚧</div>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground text-center max-w-md">
        This module is under construction. The implementation will be available
        soon.
      </p>
    </div>
  );
};

export default Home;
