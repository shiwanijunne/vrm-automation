const assessments = [
  {
    id: "A-001",
    vendor: "ABC Pvt Ltd",
    type: "Initial",
    assignedTo: "Risk Team",
    status: "Assigned",
    dueDate: "2026-01-20",
  },
  {
    id: "A-002",
    vendor: "XYZ Corp",
    type: "Renewal",
    assignedTo: "Admin",
    status: "In Progress",
    dueDate: "2026-01-18",
  },
  {
    id: "A-003",
    vendor: "LMN Services",
    type: "Initial",
    assignedTo: "Vendor",
    status: "Submitted",
    dueDate: "2026-01-15",
  },
];

const statusColor = (status) => {
  switch (status) {
    case "Assigned":
      return "#9ca3af";
    case "In Progress":
      return "#3b82f6";
    case "Submitted":
      return "#f59e0b";
    case "Approved":
      return "#22c55e";
    case "Rejected":
      return "#ef4444";
    default:
      return "#6b7280";
  }
};

export default function AssessmentList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Assessment List</h2>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Type</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {assessments.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.vendor}</td>
              <td>{a.type}</td>
              <td>{a.assignedTo}</td>
              <td>
                <span
                  style={{
                    padding: "5px 10px",
                    color: "#fff",
                    borderRadius: "5px",
                    backgroundColor: statusColor(a.status),
                  }}
                >
                  {a.status}
                </span>
              </td>
              <td>{a.dueDate}</td>
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