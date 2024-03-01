import classes from "./SubmitButtton.module.css";

const SubmitButton = ({ label = "", onClick = () => null, ...restProps }) => {
  return (
    <button onClick={onClick} className={classes.submitButton} {...restProps}>
      {label}
    </button>
  );
};

export default SubmitButton;
