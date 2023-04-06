import LoginForm from "../../components/Form/LoginForm/LoginForm";
import classes from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={classes["login-page"]}>
      <h3>Login</h3>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
