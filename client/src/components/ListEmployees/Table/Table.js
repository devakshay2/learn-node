import TableActions from "./TableActions";
import classes from "./Table.module.css";

const Table = ({ headers = [], data = [] }) => {
  console.log(headers);
  return (
    <table className={classes.table}>
      <thead className={classes.tableHead}>
        <tr>
          {headers.map((item) => {
            return <th className={classes.headerCell}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td className={classes.tableCell}>{item.name}</td>
            <td className={classes.tableCell}>{item.age}</td>
            <td className={classes.tableCell}>{item.jobTitle}</td>
            <td className={classes.tableCell}>{item.phone}</td>
            <td className={classes.tableActionsCell}>
              <TableActions isEditEnabled isDeleteEnabled />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
