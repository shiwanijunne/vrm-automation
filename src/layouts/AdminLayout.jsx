import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="container-fluid">
      <h4>Admin Panel</h4>
      <Outlet />
    </div>
  );
}