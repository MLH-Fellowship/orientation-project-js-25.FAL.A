const BASE_URL = process.env.API_URL;

export async function getExperience() {
  try {
    const response = await fetch(`${BASE_URL}/resume/experience`);
    console.log(`${BASE_URL}/resume/experience`);
    if (!response.ok) {
      const text = await response.text();
      console.error("Server error response:", text);
      throw new Error("HTTP error: status " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching experience data:", error);
    throw error;
  }
}

export async function addExperience(experience) {
  try {
    const response = await fetch(`${BASE_URL}/resume/experience`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    });
    if (!response.ok) {
      throw new Error("HTTP error: status " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding experience data:", error);
    throw error;
  }
}
