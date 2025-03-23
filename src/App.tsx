import { Suspense } from "react";
import { Routes, Route, BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import AppLayout from "./components/layout/AppLayout";
import { useTranslation } from "react-i18next";

// Modules
import DashboardModule from "./modules/dashboard/DashboardModule";
import DesignModule from "./modules/design/DesignModule";
import InventoryModule from "./modules/inventory/InventoryModule";
import ManufacturingModule from "./modules/manufacturing/ManufacturingModule";
import QuotationModule from "./modules/quotation/QuotationModule";
import SalesModule from "./modules/sales/SalesModule";
import CRMModule from "./modules/crm/CRMModule";
import ProductsModule from "./modules/products/ProductsModule";
import DeliveryModule from "./modules/delivery/DeliveryModule";
import CustomerServiceModule from "./modules/customer-service/CustomerServiceModule";
import AccountingModule from "./modules/accounting/AccountingModule";
import HRModule from "./modules/hr/HRModule";
import WebModule from "./modules/web/WebModule";
import SupplierModule from "./modules/supplier/SupplierModule";
import UserAccessModule from "./modules/user-access/UserAccessModule";

// Component for handling tempo-routes with useRoutes inside a component
const TempoRoutesWrapper = () => {
  return import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;
};

function App() {
  const basename = import.meta.env.BASE_URL;
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={basename}>
          <Suspense
            fallback={<p className="p-4 text-center">{t("common.loading")}</p>}
          >
            {/* ✅ Tempo Routes only render if enabled */}
            <TempoRoutesWrapper />

            {/* ✅ Main App Routes */}
            <Routes>
              <Route path="/*" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<DashboardModule />} />
                <Route path="design" element={<DesignModule />} />
                <Route path="inventory" element={<InventoryModule />} />
                <Route path="manufacturing" element={<ManufacturingModule />} />
                <Route path="quotation" element={<QuotationModule />} />
                <Route path="sales" element={<SalesModule />} />
                <Route path="crm" element={<CRMModule />} />
                <Route path="products" element={<ProductsModule />} />
                <Route path="delivery" element={<DeliveryModule />} />
                <Route
                  path="customer-service"
                  element={<CustomerServiceModule />}
                />
                <Route path="accounting" element={<AccountingModule />} />
                <Route path="hr" element={<HRModule />} />
                <Route path="web" element={<WebModule />} />
                <Route path="supplier" element={<SupplierModule />} />
                <Route path="user-access" element={<UserAccessModule />} />
              </Route>

              {/* ✅ Optional fallback route for 404 */}
              <Route
                path="*"
                element={
                  <p className="p-6 text-center text-red-500">
                    {t("common.error")}
                  </p>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
