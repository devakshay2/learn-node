import { useState } from "react";

import Textfiled from "../TextField/Textfiled";
import SubmitButton from "../SubmitButton/SubmitButton";

const AddEmployeeForm = () => {
  const [epmloyeeObj, setEmployeeObj] = useState({
    name: "",
    age: 18,
    jobTitle: "",
    phone: "",
    email: "",
  });
  const [isDOne, setIsDone] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/manageEmployees/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(epmloyeeObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsDone(true);
        setMessage(data.message);
        setEmployeeObj({
          name: "",
          age: 18,
          jobTitle: "",
          phone: "",
          email: "",
        });
        setTimeout(() => {
          setIsDone(false);
          setMessage("");
        }, 3000);
      })
      .catch(() => {
        setIsDone(true);
        setMessage("Error while creating employee.");
        setTimeout(() => {
          setIsDone(false);
          setMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      {isDOne ? <p>{message}</p> : null}
      <Textfiled
        label="Employee Name"
        onChange={({ target }) =>
          setEmployeeObj({ ...epmloyeeObj, name: target.value })
        }
        value={epmloyeeObj["name"]}
      />
      <Textfiled
        label="Age"
        onChange={({ target }) =>
          setEmployeeObj({ ...epmloyeeObj, age: target.value })
        }
        value={epmloyeeObj["age"]}
        type="number"
        min={18}
        max={120}
      />
      <Textfiled
        label="Title"
        onChange={({ target }) =>
          setEmployeeObj({ ...epmloyeeObj, jobTitle: target.value })
        }
        value={epmloyeeObj["jobTitle"]}
      />
      <Textfiled
        label="Phone"
        onChange={({ target }) =>
          setEmployeeObj({ ...epmloyeeObj, phone: target.value })
        }
        value={epmloyeeObj["phone"]}
      />
      <Textfiled
        label="Email"
        onChange={({ target }) =>
          setEmployeeObj({ ...epmloyeeObj, email: target.value })
        }
        value={epmloyeeObj["email"]}
      />
      <SubmitButton
        label={"Add Employee"}
        onClick={onSubmit}
        disabled={
          !epmloyeeObj["name"] ||
          !epmloyeeObj["age"] ||
          !epmloyeeObj["jobTitle"] ||
          !epmloyeeObj["phone"] ||
          !epmloyeeObj["email"]
        }
      />
    </div>
  );
};

export default AddEmployeeForm;
