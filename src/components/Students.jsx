import React from "react";

const Students = ({ students }) => {
  return (
    <div>
      {students.map((st) => (
        <div key={st.id}>
          <h2 className="mt-5">
            {st.id}. {st.firstName} {st.lastName} {st.number}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Students;
