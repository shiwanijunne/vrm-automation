export default function VendorRemediationResponse() {
  return (
    <div style={{ padding: "20px" }}>
      <h2> Vendor Remediation Response</h2>

      <p><strong>Issue:</strong> Missing data encryption policy</p>
      <p><strong>Due Date:</strong> 2026-01-25</p>

      <textarea
        placeholder="Describe remediation actions taken"
        rows="4"
      ></textarea><br /><br />

      <input type="file" /><br /><br />
      <button>Submit Response</button>
    </div>
  );
}