import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin"); // default
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login (no backend)
    localStorage.setItem("token", "dummy-token-123");
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/vendor");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}