import { Outlet } from "react-router-dom";

export default function VendorLayout() {
  return (
    <div className="container-fluid">
      <h4>Vendor Panel</h4>
      <Outlet />
    </div>
  );
}