const BASE_URL = process.env.API_URL;

async function handleResponse(response) {
  if (!response.ok) {
    const text = await response.text();
    console.error("Server error response:", text);
    throw new Error("HTTP error: status " + response.status);
  }
  return await response.json();
}

export async function suggestDescription(description, type) {
  try {
    const response = await fetch(`${BASE_URL}/resume/suggest-description`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, type }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error getting description suggestion:", error);
    throw error;
  }
}
