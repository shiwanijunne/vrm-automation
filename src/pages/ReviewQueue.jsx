const reviews = [
  {
    id: "A-003",
    vendor: "LMN Services",
    template: "Vendor Security Assessment",
    submittedOn: "2026-01-14",
    reviewer: "Risk Team",
    status: "Submitted",
  },
];

export default function ReviewQueue() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Review Queue</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Template</th>
            <th>Submitted On</th>
            <th>Reviewer</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.vendor}</td>
              <td>{r.template}</td>
              <td>{r.submittedOn}</td>
              <td>{r.reviewer}</td>
              <td>{r.status}</td>
              <td>
                <button>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}