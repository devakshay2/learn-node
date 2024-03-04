import classes from "./Textfiled.module.css";

const Textfiled = ({
  label = "Enter Text",
  type = "text",
  value = "",
  onChange = () => null,
  inputClass = "",
  ...restProps
}) => {
  return (
    <div>
      <label className={classes.textLabel}>{label}</label>
      <input
        className={`${classes.textInput} ${inputClass}`}
        type={type || "text"}
        value={value}
        onChange={onChange}
        {...restProps}
      ></input>
    </div>
  );
};

export default Textfiled;
