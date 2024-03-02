import SubmitButton from "../../SubmitButton/SubmitButton";
import classes from "./DeleteDialog.module.css";

const DeleteDialog = ({
  row = {},
  setOpen = () => null,
  open = false,
  updateTable = () => null,
}) => {
  const handleDialogClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    fetch("/manageEmployees/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: row._id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateTable();
        handleDialogClose();
      })
      .catch(() => {
        console.log("Server error.");
      });
  };

  return (
    <>
      {open ? (
        <div>
          <div className={classes.hiddenDiv} onClick={() => setOpen(false)} />
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.dialogTitle}>Delete Dialog</div>
              <div className={classes.dialogContent}>
                <p className={classes.text}>
                  Are you sure you want to remove this record?
                </p>
              </div>

              <div>
                <SubmitButton label={"No"} onClick={handleDialogClose} />
                <SubmitButton label={"Yes"} onClick={onDelete} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DeleteDialog;
