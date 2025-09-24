import { useState, useEffect } from "react";
import AddExperienceForm from "./AddExperienceForm";
import { getExperience } from "../../requests/experience";
import DisplayExperience from "./DisplayExperience";

export default function AddExperience() {
  const [showForm, setShowForm] = useState(false);

  const [experienceData, setExperienceData] = useState([
    {
      title: "Software Developer",
      company: "Google",
      start_date: "October 2022",
      end_date: "January 2024",
      description: "Writing JavaScript Code",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    },
    {
      title: "Software Developer",
      company: "Amazon",
      start_date: "November 2024",
      end_date: "Present",
      description: "Writing C# Code",
      logo: "https://icon2.cleanpng.com/20180803/ubx/5ba055fe0b3b79a8f55892cc8186c6b6.webp",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getExperience();
        setExperienceData(data);
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      {experienceData.length === 0 && <p>No experience data available.</p>}
      <div className="category-wrapper">
        {!showForm &&
          experienceData.map((exp, index) => (
            <DisplayExperience
              key={index}
              title={exp.title}
              company={exp.company}
              start_date={exp.start_date}
              end_date={exp.end_date}
              description={exp.description}
              logo={exp.logo}
            />
          ))}
      </div>

      {showForm ? (
        <AddExperienceForm setShowForm={setShowForm} />
      ) : (
        <>
          <p>You can add your Experience in here</p>
          <button onClick={() => setShowForm(true)}>Add Experience</button>
        </>
      )}
    </section>
  );
}
