import { useState } from "react";
import { logoutRequest } from "./pages/authApi"; // check path //

export default function LogoutButton({ onLogout, disabled }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);

    try {
      await logoutRequest();
    } finally {
      setIsLoading(false);
      if (onLogout) onLogout();
    }
  }

  return (
    <button onClick={handleClick} disabled={disabled || isLoading}>
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}
