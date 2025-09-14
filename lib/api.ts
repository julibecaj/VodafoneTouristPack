// lib/api.ts
const API_URL = "http://localhost:8080/api/users"; // your Spring Boot URL

// Register a user
export async function registerUser(userData: any) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
}

// Login a user
export async function loginUser(loginData: any) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (res.status === 200) {
    return res.json(); // User object
  } else {
    const error = await res.text();
    throw new Error(error); // handle invalid credentials
  }
}

// Get user by ID
export async function getUserData(userId: number) {
  const res = await fetch(`${API_URL}/${userId}`);
  return res.json();
}
