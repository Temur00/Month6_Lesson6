import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/AddContact";

const App = () => {
  const [person, setperson] = useState({
    firstName: "Tom",
    lastName: "Jerry",
    number: "+998990010099",
  });

  return (
    <>
      <h1>
        <div className="container pt-4 text-center pb-3">
          Registration of Students 🧑‍🎓 👩‍🎓!
        </div>
        <AddContact />
      </h1>
    </>
  );
};

export default App;
