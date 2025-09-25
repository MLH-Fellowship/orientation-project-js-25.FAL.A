import { useState, useEffect } from "react";
import AddInfoForm from "./AddInfoForm";
import DisplayInfo from "./DisplayInfo";
import { getInfo } from "../../requests/info";

export default function AddInfo() {
  const [showForm, setShowForm] = useState(false);
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getInfo();
        setInfoData(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      {!infoData && !showForm && <p>Add your contact information</p>}

      {infoData && !showForm && (
        <DisplayInfo
          name={infoData.name}
          phone={infoData.phone}
          email={infoData.email}
        />
      )}

      {showForm ? (
        <AddInfoForm
          setShowForm={setShowForm}
          setInfoData={setInfoData}
          currentInfo={infoData}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>
          {infoData ? "Edit Contact Info" : "Add Contact Info"}
        </button>
      )}
    </section>
  );
}