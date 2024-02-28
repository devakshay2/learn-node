import classes from "./SubmitButtton.module.css";

const SubmitButton = ({ label = "", onClick = () => null }) => {
  return (
    <button onClick={onClick} className={classes.submitButton}>
      {label}
    </button>
  );
};

export default SubmitButton;
