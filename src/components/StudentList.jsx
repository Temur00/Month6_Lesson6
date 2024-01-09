import React, { useState } from "react";
import Table from "react-bootstrap/Table";

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
      number: "+998990010099",
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Smith",
      number: "+99833003033",
    },
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
    <div className="container">
      <hr />
      <form onSubmit={addToList} className="w-50 mx-auto">
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
      <div className="mt-5 text-center">Students 🧑‍🎓 👩‍🎓</div>
      <hr className="mt-2 mb-5" />
      <div>
        <Table bordered hover className="container">
          <thead>
            <tr>
              <th>No</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Number</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                {students.map((st, i) => (
                  <div key={st.id}>
                    <h2 className="mt-5">{i + 1}.</h2>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {students.map((st) => (
                  <div key={st.id}>
                    <h2 className="mt-5"> {st.firstName}</h2>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {students.map((st) => (
                  <div key={st.id}>
                    <h2 className="mt-5"> {st.lastName}</h2>
                  </div>
                ))}
              </td>
              <td>
                {" "}
                {students.map((st) => (
                  <div key={st.id}>
                    <h2 className="mt-5">{st.number}</h2>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentList;
