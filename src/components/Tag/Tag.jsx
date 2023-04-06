import classes from "./Tag.module.scss";

const Tag = (props) => {
  return (
    <li className={classes["tag"]}>
      <h5 className={classes["tag__label"]}>{props.label}:</h5>
      <p className={classes["tag__value"]}>{props.value}</p>
    </li>
  );
};

export default Tag;
