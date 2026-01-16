export default function ReviewDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Assessment Review</h2>

      {/* Summary */}
      <h3>Assessment Summary</h3>
      <p><strong>Vendor:</strong> LMN Services</p>
      <p><strong>Template:</strong> Vendor Security Assessment</p>
      <p><strong>Status:</strong> Under Review</p>

      {/* Responses */}
      <h3>Vendor Responses</h3>
      <ul>
        <li>Do you have ISO 27001? → Yes</li>
        <li>Do you encrypt data? → Yes</li>
      </ul>

      {/* Scoring Placeholder */}
      <h3>Scoring Breakdown</h3>
      <div style={{ border: "1px dashed gray", padding: "15px" }}>
        <p>Total Score: -- / 100</p>
        <p>Risk Level: --</p>
        <p><em>Scoring logic to be implemented in v2</em></p>
      </div>

      {/* Actions */}
      <h3>Review Decision</h3>
      <textarea placeholder="Reviewer comments"></textarea><br /><br />
      <button>Approve</button>
      <button style={{ marginLeft: "10px" }}>Reject</button>
    </div>
  );
}