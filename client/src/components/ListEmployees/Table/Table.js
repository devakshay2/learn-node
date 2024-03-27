import { useState } from "react";

import TableActions from "./TableActions";
import DeleteDialog from "../../Dialogs/DeleteDialog/DeleteDialog";
import EditDialog from "../../Dialogs/EditDialog/EditDialog";
import classes from "./Table.module.css";

const Table = ({
  headers = [],
  data = [],
  updateTable = () => null,
  isTableActions = false,
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});

  const onDeleteOpen = (row) => {
    setSelectedRecord(row);
    setDeleteDialogOpen(true);
  };

  const onEditOpen = (row) => {
    setSelectedRecord(row);
    setEditDialogOpen(true);
  };

  const setDeleteOpenClose = (ifOpen) => {
    if (!ifOpen) {
      setSelectedRecord({});
    }
    setDeleteDialogOpen(ifOpen);
  };

  const setEditOpenClose = (ifOpen) => {
    if (!ifOpen) {
      setSelectedRecord({});
    }
    setEditDialogOpen(ifOpen);
  };

  return (
    <div className={classes.tableParent}>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            {headers.map((item) => {
              return (
                <th className={classes.headerCell} key={item}>
                  {item}
                </th>
              );
            })}
            {isTableActions ? (
              <th className={classes.tableHead}>Actions</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`${item.phone}-${index}`}>
              <td className={classes.tableCell}>{item.name}</td>
              <td className={classes.tableCell}>{item.age}</td>
              <td className={classes.tableCell}>{item.jobTitle}</td>
              <td className={classes.tableCell}>{item.phone}</td>
              {isTableActions ? (
                <td className={classes.tableActionsCell}>
                  <TableActions
                    isEditEnabled
                    isDeleteEnabled
                    openDelete={onDeleteOpen}
                    openEdit={onEditOpen}
                    row={item}
                  />
                </td>
              ) : null}
            </tr>
          ))}
          <tr>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td className={classes.tableCell}>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
      {deleteDialogOpen ? (
        <DeleteDialog
          updateTable={updateTable}
          setOpen={setDeleteOpenClose}
          open={deleteDialogOpen}
          row={selectedRecord}
        />
      ) : null}
      {editDialogOpen ? (
        <EditDialog
          updateTable={updateTable}
          setOpen={setEditOpenClose}
          open={editDialogOpen}
          row={selectedRecord}
        />
      ) : null}
    </div>
  );
};

export default Table;
