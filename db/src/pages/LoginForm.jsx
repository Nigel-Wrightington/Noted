import { useState } from "react";
import { loginRequest } from "./pages/authApi"; // check path //

export default function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const { user, token } = await loginRequest({ username, password });

      if (onLoginSuccess) {
        onLoginSuccess({ user, token });
      }

      setStatus("idle");
      setUsername("");
      setPassword("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <br />

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Logging in..." : "Login"}
      </button>

      {status === "error" && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
}
