const renewals = [
  {
    id: "A-001",
    vendor: "ABC Pvt Ltd",
    renewalDue: "2026-01-20",
  },
  {
    id: "A-002",
    vendor: "XYZ Corp",
    renewalDue: "2026-01-10",
  },
];

const today = new Date();

export default function Renewals() {
  const upcoming = renewals.filter(
    (r) => new Date(r.renewalDue) >= today
  );

  const overdue = renewals.filter(
    (r) => new Date(r.renewalDue) < today
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Renewals</h2>

      {/* Upcoming */}
      <h3 style={{ color: "blue" }}>Upcoming Renewals</h3>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Assessment</th>
            <th>Vendor</th>
            <th>Renewal Due</th>
          </tr>
        </thead>
        <tbody>
          {upcoming.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.vendor}</td>
              <td>{r.renewalDue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      {/* Overdue */}
      <h3 style={{ color: "red" }}>Overdue Renewals</h3>
      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Assessment</th>
            <th>Vendor</th>
            <th>Renewal Due</th>
          </tr>
        </thead>
        <tbody>
          {overdue.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.vendor}</td>
              <td>{r.renewalDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}