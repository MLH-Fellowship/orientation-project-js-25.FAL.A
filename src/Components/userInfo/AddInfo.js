import { useState } from "react";
import AddInfoForm from "./AddInfoForm";
import DisplayInfo from "./DisplayInfo";

export default function AddInfo() {
  const [showForm, setShowForm] = useState(false);
  const [infoData, setInfoData] = useState(null);

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