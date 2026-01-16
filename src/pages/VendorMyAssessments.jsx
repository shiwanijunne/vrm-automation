const assessments = [
  { id: "A-001", status: "Assigned", dueDate: "2026-01-20" },
  { id: "A-002", status: "In Progress", dueDate: "2026-01-18" },
  { id: "A-003", status: "Submitted", dueDate: "2026-01-15" },
  { id: "A-004", status: "Remediation", dueDate: "2026-01-25" },
  { id: "A-005", status: "Approved", dueDate: "2026-01-10" },
];

const statusColors = {
  Assigned: "#9ca3af",
  "In Progress": "#3b82f6",
  Submitted: "#f59e0b",
  Remediation: "#ef4444",
  Approved: "#22c55e",
};

export default function VendorMyAssessments() {
  const grouped = assessments.reduce((acc, a) => {
    acc[a.status] = acc[a.status] || [];
    acc[a.status].push(a);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Assessments</h2>

      {Object.keys(grouped).map((status) => (
        <div key={status} style={{ marginBottom: "25px" }}>
          <h3>{status}</h3>

          <table border="1" width="100%" cellPadding="10">
            <thead>
              <tr>
                <th>Assessment ID</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {grouped[status].map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.dueDate}</td>
                  <td>
                    <button>Open</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}