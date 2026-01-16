export default function RemediationDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Remediation Detail</h2>

      <h3>Issue Summary</h3>
      <p><strong>Vendor:</strong> LMN Services</p>
      <p><strong>Issue:</strong> Missing data encryption policy</p>
      <p><strong>Severity:</strong> High</p>
      <p><strong>Status:</strong> Responded</p>

      <h3>Vendor Response</h3>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <p>
          We have implemented AES-256 encryption and updated internal policies.
        </p>
        <p><strong>Evidence:</strong> encryption_policy.pdf</p>
      </div>

      <h3>Reviewer Action</h3>
      <textarea placeholder="Reviewer comments"></textarea><br /><br />
      <button>Accept & Close</button>
      <button style={{ marginLeft: "10px" }}>Reject</button>
    </div>
  );
}