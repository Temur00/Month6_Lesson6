import React, { useState } from "react";

const StudentList = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    number: "",
  });

  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      number: +998990010099,
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Smith",
      number: +99833003033,
    },
    // {
    //   id: 3,
    //   firstName: "Jane",
    //   lastName: "Doe",
    //   number: +99880880088,
    // },
  ]);

  const addToList = (e) => {
    e.preventDefault();
    setStudents([student, ...students]);
    setStudent({
      firstName: "",
      lastName: "",
      number: "",
    });
  };

  return (
    <div className="w-50 mx-auto">
      <hr />
      <form onSubmit={addToList}>
        <div className=" d-block pt-5">
          <label className="form-label" htmlFor="firstName">
            Firstname
          </label>
          <input
            className="form-control p-3 "
            type="text"
            name="firstName"
            id="firstName"
            value={student.firstName}
            onChange={(e) =>
              setStudent({
                ...student,
                firstName: e.target.value,
              })
            }
          />

          <label className="form-label pt-4" htmlFor="lastName">
            Lastname
          </label>
          <input
            className="form-control p-3"
            type="text"
            name="lastName"
            id="lastName"
            value={student.lastName}
            onChange={(e) =>
              setStudent({
                ...student,
                lastName: e.target.value,
              })
            }
          />

          <label className="form-label pt-4" htmlFor="number">
            Number
          </label>
          <input
            className="form-control p-3"
            type="text"
            name="number"
            id="number"
            placeholder="+998"
            value={student.number}
            onChange={(e) =>
              setStudent({
                ...student,
                number: e.target.value,
              })
            }
          />
          <button
            type="submit"
            className=" btn btn-success mt-5  p-3 w-100 d-block mx-auto"
          >
            Add new Student
          </button>
        </div>
      </form>
      <br />
      <div className="mt-5 text-center">Students</div>
      <hr className="mt-2 " />
      <div>
        {students.map((st, i) => (
          <div key={st.id}>
            <h2 className="mt-5">
              {i + 1}. {st.firstName} {st.lastName} {st.number}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
