const BASE_URL = process.env.API_URL;

async function handleResponse(response) {
  if (!response.ok) {
    const text = await response.text();
    console.error("Server error response:", text);
    throw new Error("HTTP error: status " + response.status);
  }
  return await response.json();
}

export async function getInfo() {
  try {
    const response = await fetch(`${BASE_URL}/resume/user`);
    console.log(`${BASE_URL}/resume/user`);
    return await handleResponse(response);
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
}

export async function addInfo(info) {
  try {
    const response = await fetch(`${BASE_URL}/resume/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error adding user info:", error);
    throw error;
  }
}

export async function updateInfo(info) {
  try {
    const response = await fetch(`${BASE_URL}/resume/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error updating user info:", error);
    throw error;
  }
}
