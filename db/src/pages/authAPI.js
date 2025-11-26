const BASE_URL = ""; // Keeping it blank for the 2nd feature of vertical slice //

export async function loginRequest({ username, password }) {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    // CHECK PATH FOR JSON //
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Login failed.");
  }

  return { user: data.user, token: data.token };
}

export async function logoutRequest() {
  const response = await fetch(`${BASE_URL}/api/auth/logout`, {
    // CHECK PATH FOR JSON //
    method: "POST",
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    console.error("Logout error:", data);
  }
}
