import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

function AdminDashboard() {
  // Dummy KPI data
  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    revenue: 0
  });

  // Dummy chart data
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Set dummy KPIs
    setStats({
      users: 120,
      orders: 75,
      revenue: 5000
    });

    // Set dummy chart data
    setSalesData([
      { month: "Jan", sales: 400 },
      { month: "Feb", sales: 300 },
      { month: "Mar", sales: 500 },
      { month: "Apr", sales: 200 },
      { month: "May", sales: 600 },
      { month: "Jun", sales: 700 },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Dashboard</h1>

      {/* KPI Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px", flex: 1 }}>
          <h3>Total Users</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{stats.users}</p>
        </div>
        <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px", flex: 1 }}>
          <h3>Total Orders</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{stats.orders}</p>
        </div>
        <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px", flex: 1 }}>
          <h3>Total Revenue</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>${stats.revenue}</p>
        </div>
      </div>

      {/* Sales Chart */}
      <div style={{ marginTop: "50px" }}>
        <h2>Sales Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;