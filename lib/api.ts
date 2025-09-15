// lib/api.ts
const API_URL = "http://localhost:8080/api/users"; // your Spring Boot URL

// Register a user
export async function registerUser(userData:any) {
  const res = await fetch(`${API_URL}/Register`, { //CHECK IF IT SHOULD BE REGISTER
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if(!res.ok){
    throw new Error("Registration Failed");
  }
  return res.json();
}

// Login a user
export async function loginUser(loginData: any) {
  const res = await fetch(`${API_URL}/LogIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if(!res.ok){
    throw new Error("Login Failed");
  }
  return res.json();
}

// Get user by ID
export async function getUserData(userId: number) {
  const res = await fetch(`${API_URL}/${userId}`);
  return res.json();
}
