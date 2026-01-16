const reports = [
  {
    id: "A-001",
    vendor: "ABC Pvt Ltd",
    status: "Approved",
    risk: "Low",
    score: "85",
    completedOn: "2026-01-10",
  },
  {
    id: "A-002",
    vendor: "XYZ Corp",
    status: "Rejected",
    risk: "High",
    score: "45",
    completedOn: "2026-01-12",
  },
];

export default function Reports() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Reports</h2>

      {/* Export Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <button>Export CSV</button>
        <button style={{ marginLeft: "10px" }}>Export Excel</button>
        <button style={{ marginLeft: "10px" }}>Export PDF</button>
      </div>

      {/* Table */}
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Assessment ID</th>
            <th>Vendor</th>
            <th>Status</th>
            <th>Risk Level</th>
            <th>Score</th>
            <th>Completed On</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.vendor}</td>
              <td>{r.status}</td>
              <td>{r.risk}</td>
              <td>{r.score}</td>
              <td>{r.completedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}