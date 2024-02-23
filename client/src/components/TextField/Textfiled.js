import classes from "./Textfiled.module.css";

const Textfiled = ({
  label = "Enter Text",
  type = "text",
  value = "",
  onChange = () => null,
  ...restProps
}) => {
  return (
    <div>
      <label className={classes.textLabel}>{label}</label>
      <input
        className={classes.textInput}
        type={type || "text"}
        value={value}
        onChange={onChange}
        {...restProps}
      ></input>
    </div>
  );
};

export default Textfiled;
