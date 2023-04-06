import classes from "./Alert.module.scss";

const Alert = (props) => {
  return (
    <div className={classes.alert}>
      <p className={classes["alert__text"]}>{props.message}</p>
    </div>
  );
};

export default Alert;
