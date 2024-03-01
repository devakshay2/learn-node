import classes from "./EmployeePage.module.css";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";
import ListEmployees from "../ListEmployees/ListEmployees";

const EmployeePage = (props) => {
  const formObj = [AddEmployeeForm, ListEmployees];
  const renderForm = () => {
    if (formObj[props.index]) {
      const Component = formObj[props.index];
      return <Component />;
    } else {
      return null;
    }
  };
  return <div className={classes.parentDiv}>{renderForm()}</div>;
};

export default EmployeePage;
