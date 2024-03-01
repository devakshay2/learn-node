import { useState } from "react";

import Textfiled from "../TextField/Textfiled";
import SubmitButton from "../SubmitButton/SubmitButton";

const AddEmployeeForm = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeAge, setEmployeeAge] = useState("");
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/manageEmployees/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: employeeName,
        age: employeeAge,
        jobTitle: employeeTitle,
        phone: employeeNumber,
        email: employeeEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => {
        console.log("Server error.");
      });
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <Textfiled
        label="Employee Name"
        onChange={({ target }) => setEmployeeName(target.value)}
        value={employeeName}
      />
      <Textfiled
        label="Age"
        onChange={({ target }) => setEmployeeAge(target.value)}
        value={employeeAge}
        type="number"
        min={18}
        max={120}
      />
      <Textfiled
        label="Title"
        onChange={({ target }) => setEmployeeTitle(target.value)}
        value={employeeTitle}
      />
      <Textfiled
        label="Number"
        onChange={({ target }) => setEmployeeNumber(target.value)}
        value={employeeNumber}
      />
      <Textfiled
        label="Email"
        onChange={({ target }) => setEmployeeEmail(target.value)}
        value={employeeEmail}
      />
      <SubmitButton
        label={"Add Employee"}
        onClick={onSubmit}
        disabled={
          !employeeName ||
          !employeeAge ||
          !employeeTitle ||
          !employeeNumber ||
          !employeeEmail
        }
      />
    </div>
  );
};

export default AddEmployeeForm;
