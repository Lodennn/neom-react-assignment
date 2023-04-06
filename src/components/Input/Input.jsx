import classes from "./Input.module.scss";

const Input = (props) => {
  return (
    <input
      type={props.type || "text"}
      name={props.name}
      value={props.value}
      className={classes.input}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
