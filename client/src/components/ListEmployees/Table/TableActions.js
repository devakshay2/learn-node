import { useState } from "react";

import ActionsIcon from "./ActionsIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import classes from "./TableActions.module.css";

const TableActions = ({
  isEditEnabled = false,
  isDeleteEnabled = false,
  subgroups = [],
  deletionCheckFiledName = "",
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
              <div >
                <EditIcon className={classes.icons} />
              </div>
            ) : null}
            {isDeleteEnabled ? (
              <div >
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
