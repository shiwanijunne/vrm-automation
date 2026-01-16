const remediations = [
  {
    id: "R-001",
    vendor: "LMN Services",
    assessment: "A-003",
    issue: "Missing data encryption policy",
    severity: "High",
    status: "Open",
    dueDate: "2026-01-25",
  },
];

export default function RemediationList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Remediation List</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Assessment</th>
            <th>Issue</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {remediations.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.vendor}</td>
              <td>{r.assessment}</td>
              <td>{r.issue}</td>
              <td>{r.severity}</td>
              <td>{r.status}</td>
              <td>{r.dueDate}</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}