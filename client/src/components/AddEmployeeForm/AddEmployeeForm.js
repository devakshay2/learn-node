import { useState } from "react";

import Textfiled from "../TextField/Textfiled";
import SubmitButton from "../SubmitButton/SubmitButton";

const AddEmployeeForm = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeAge, setEmployeeAge] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [employeeCity, setEmployeeCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/manageEmployees/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ employeeName }),
    });
  };

  return (
    <>
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
        label="Designation"
        onChange={({ target }) => setEmployeeDesignation(target.value)}
        value={employeeDesignation}
      />
      <Textfiled
        label="City"
        onChange={({ target }) => setEmployeeCity(target.value)}
        value={employeeCity}
      />
      <SubmitButton label={"Add Employee"} onClick={onSubmit} />
    </>
  );
};

export default AddEmployeeForm;
