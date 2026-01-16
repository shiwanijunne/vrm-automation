import React, { useState, useEffect } from "react";

function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [filter, setFilter] = useState({ risk: "", tier: "", status: "" });
  const [selectedVendor, setSelectedVendor] = useState(null);

  // Dummy vendor data
  const dummyVendors = [
    { id: 1, name: "Vendor A", risk: "High", tier: "Tier 1", status: "Active" },
    { id: 2, name: "Vendor B", risk: "Low", tier: "Tier 2", status: "Inactive" },
    { id: 3, name: "Vendor C", risk: "Medium", tier: "Tier 1", status: "Active" },
  ];

  useEffect(() => {
    // Initially load all vendors
    setVendors(dummyVendors);
  }, []);

  // Filter vendors
  const filteredVendors = vendors.filter(v =>
    (filter.risk === "" || v.risk === filter.risk) &&
    (filter.tier === "" || v.tier === filter.tier) &&
    (filter.status === "" || v.status === filter.status)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vendors</h1>

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <select onChange={e => setFilter({ ...filter, risk: e.target.value })}>
          <option value="">All Risks</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select onChange={e => setFilter({ ...filter, tier: e.target.value })}>
          <option value="">All Tiers</option>
          <option value="Tier 1">Tier 1</option>
          <option value="Tier 2">Tier 2</option>
        </select>

        <select onChange={e => setFilter({ ...filter, status: e.target.value })}>
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Vendors Table */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Risk</th>
            <th>Tier</th>
            <th>Status</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map(v => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.risk}</td>
              <td>{v.tier}</td>
              <td>{v.status}</td>
              <td>
                <button onClick={() => setSelectedVendor(v)}>View Profile</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Vendor Profile Tabs */}
      {selectedVendor && (
        <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ccc" }}>
          <h2>{selectedVendor.name} Profile</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button>Overview</button>
            <button>Risk</button>
            <button>Documents</button>
          </div>
          <div style={{ marginTop: "20px" }}>
            {/* Display details for the selected tab */}
            <p>Details of {selectedVendor.name} will appear here...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vendors;