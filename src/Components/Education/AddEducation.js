import { useState, useEffect } from "react";
import AddEducationForm from "./AddEducationForm";
import { getEducation } from "../../requests/education";
import DisplayEducation from "./DisplayEducation";

export default function AddEducation() {
  const [showForm, setShowForm] = useState(false);

  const [educationData, setEducationData] = useState([
    {
      course: "Bachelor of Science in Computer Science",
      school: "University A",
      start_date: "2021-09",
      end_date: "2025-04",
      grade: "90%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg",
    },
    {
      course: "Master of Science in Finance",
      school: "Example B",
      start_date: "2020-09",
      end_date: "2022-06",
      grade: "80%",
      logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEducation();
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      {educationData.length === 0 && <p>No education data available.</p>}
      <div className="education-wrapper">
        {!showForm &&
          educationData.map((edu, index) => (
            <DisplayEducation
              key={index}
              course={edu.course}
              school={edu.school}
              start_date={edu.start_date}
              end_date={edu.end_date}
              grade={edu.grade}
              logo={edu.logo}
            />
          ))}
      </div>

      {showForm ? (
        <AddEducationForm setShowForm={setShowForm} />
      ) : (
        <>
          <p>You can add your Education in here</p>
          <button onClick={() => setShowForm(true)}>Add Education</button>
        </>
      )}
    </section>
  );
}
