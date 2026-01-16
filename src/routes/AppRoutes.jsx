import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

import AdminLayout from "../layouts/AdminLayout";
import VendorLayout from "../layouts/VendorLayout";

import Dashboard from "../pages/admin/Dashboard";
import MyAssessments from "../pages/vendor/MyAssessments";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Vendor routes */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<MyAssessments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}