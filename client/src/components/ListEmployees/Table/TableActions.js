import { useState } from "react";

import ActionsIcon from "./ActionsIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import classes from "./TableActions.module.css";

const TableActions = ({
  row = {},
  isEditEnabled = false,
  isDeleteEnabled = false,
  openDelete = () => null,
  openEdit = () => null,
}) => {
  const [isLisrOpen, setIsListOpen] = useState(false);

  return (
    <div className={classes.parent} onClick={() => setIsListOpen(!isLisrOpen)}>
      <ActionsIcon />
      {isLisrOpen ? (
        <>
          <div className={classes.hiddenDiv}></div>
          <div
            className={classes.listParent}
            onClick={() => setIsListOpen(false)}
          >
            {isEditEnabled ? (
              <div>
                <EditIcon
                  className={classes.icons}
                  onClick={() => openEdit(row)}
                />
              </div>
            ) : null}
            {isDeleteEnabled ? (
              <div onClick={() => openDelete(row)}>
                <DeleteIcon className={classes.icons} />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TableActions;
