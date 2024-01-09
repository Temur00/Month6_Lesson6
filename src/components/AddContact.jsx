// import React, { useState } from "react";

// const AddContact = () => {
//   const [person, setPerson] = useState({
//     firstName: "",
//     lastName: "",
//     number: "",
//   });
//   const [student, setStudent] = useState({
//     firstName: "",
//     lastName: "",
//     number: "",
//   });

//   const addToList = (e) => {
//     e.preventDefault();
//     setStudent(person);
//   };

//   return (
//     <div className="w-50 mx-auto pt-5">
//       <form onSubmit={addToList}>
//         <div>
//           <label className="form-label" htmlFor="firstName">
//             Firstname
//           </label>
//           <input
//             className="form-control p-2"
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={person.firstName}
//             onChange={(e) =>
//               setPerson({
//                 ...person,
//                 firstName: e.target.value,
//               })
//             }
//           />

//           <label className="form-label pt-4" htmlFor="lastName">
//             Lastname
//           </label>
//           <input
//             className="form-control p-2"
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={person.lastName}
//             onChange={(e) =>
//               setPerson({
//                 ...person,
//                 lastName: e.target.value,
//               })
//             }
//           />

//           <label className="form-label pt-4" htmlFor="number">
//             Number
//           </label>
//           <input
//             className="form-control p-2"
//             type="text"
//             name="number"
//             id="number"
//             placeholder="+998"
//             value={person.number}
//             onChange={(e) =>
//               setPerson({
//                 ...person,
//                 number: e.target.value,
//               })
//             }
//           />
//           <button
//             type="submit"
//             className="btn btn-success mt-5  p-3 w-100 d-block mx-auto"
//           >
//             Add new Student
//           </button>
//         </div>
//       </form>
//       <h2 className="mt-5">
//         {student.firstName} {student.lastName} {student.number}
//       </h2>
//     </div>
//   );
// };

// export default AddContact;
