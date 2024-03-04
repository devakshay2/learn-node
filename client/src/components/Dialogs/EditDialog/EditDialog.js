import { useState, useEffect } from "react";

import Textfiled from "../../TextField/Textfiled";
import SubmitButton from "../../SubmitButton/SubmitButton";
import classes from "./EditDialog.module.css";

const EditDialog = ({
  row = {},
  setOpen = () => null,
  open = false,
  updateTable = () => null,
}) => {
  const [epmloyeeObj, setEmployeeObj] = useState({
    name: "",
    age: 18,
    jobTitle: "",
    phone: "",
    email: "",
  });
  const [isDOne, setIsDone] = useState(false);
  const [message, setMessage] = useState("");
  const handleDialogClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setEmployeeObj(row);
  }, [row]);

  const onSubmit = () => {
    fetch("/manageEmployees/update", {
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
        updateTable();
        setTimeout(() => {
          setIsDone(false);
          setMessage("");
          if (data.error === false) {
            handleDialogClose();
          }
        }, 3000);
      })
      .catch(() => {
        setIsDone(true);
        setMessage("Error while updating record.");
        setTimeout(() => {
          setIsDone(false);
          setMessage("");
        }, 3000);
      });
  };

  return (
    <>
      {open ? (
        <div>
          <div className={classes.hiddenDiv} onClick={() => setOpen(false)} />
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.dialogTitle}>Edit Dialog</div>
              <div className={classes.dialogContent}>
                {isDOne ? <p>{message}</p> : null}
                <Textfiled
                  inputClass={classes.input}
                  label="Employee Name"
                  onChange={({ target }) =>
                    setEmployeeObj({ ...epmloyeeObj, name: target.value })
                  }
                  value={epmloyeeObj["name"]}
                />
                <Textfiled
                  inputClass={classes.input}
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
                  inputClass={classes.input}
                  label="Title"
                  onChange={({ target }) =>
                    setEmployeeObj({ ...epmloyeeObj, jobTitle: target.value })
                  }
                  value={epmloyeeObj["jobTitle"]}
                />
                <Textfiled
                  inputClass={classes.input}
                  label="Phone"
                  onChange={({ target }) =>
                    setEmployeeObj({ ...epmloyeeObj, phone: target.value })
                  }
                  value={epmloyeeObj["phone"]}
                />
                <Textfiled
                  inputClass={classes.input}
                  label="Email"
                  onChange={({ target }) =>
                    setEmployeeObj({ ...epmloyeeObj, email: target.value })
                  }
                  value={epmloyeeObj["email"]}
                />
                <SubmitButton
                  label={"Update"}
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
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditDialog;
