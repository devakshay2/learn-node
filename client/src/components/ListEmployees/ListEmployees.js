import { useEffect, useState } from "react";

import Table from "./Table/Table";

const ListEmployees = () => {
  const [tableHeaders] = useState([
    "Name",
    "Age",
    "Designation",
    "Phone",
    "Actions",
  ]);
  const [listOfEmployees, setListOfEmployees] = useState([]);
  useEffect(() => {
    fetch("/manageEmployees/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setListOfEmployees(data.data))
      .catch(() => {
        console.log("Server error.");
      });
  }, []);

  return (
    <div>
      <h1>List of Employees</h1>
      <Table headers={tableHeaders} data={listOfEmployees} />
    </div>
  );
};

export default ListEmployees;
