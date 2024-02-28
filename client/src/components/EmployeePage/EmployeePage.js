import classes from "./EmployeePage.module.css";
import AddEmployeeForm from "../AddEmployeeForm/AddEmployeeForm";

const EmployeePage = (props) => {
  const formObj = [AddEmployeeForm];
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
