const BASE_URL = process.env.API_URL;

export async function getSkills() {
  try {
    const response = await fetch(`${BASE_URL}/resume/skill`);
    console.log(`${BASE_URL}/resume/skill`);
    if (!response.ok) {
      const text = await response.text();
      console.error("Server error response:", text);
      throw new Error("HTTP error: status " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching skill data:", error);
    throw error;
  }
}

export async function addSkill(skill) {
  try {
    const response = await fetch(`${BASE_URL}/resume/skill`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skill),
    });
    if (!response.ok) {
      throw new Error("HTTP error: status " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding skill data:", error);
    throw error;
  }
}
