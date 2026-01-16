import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/vendor");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <br /><br />
      <button onClick={() => handleLogin("vendor")}>Login as Vendor</button>
    </div>
  );
}

export default Login;