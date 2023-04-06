import { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import classes from "./LoginForm.module.scss";
import { setLocalStorage } from "../../../services/Storage";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user-slice";
import Alert from "../../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../store/apis/auth-apis";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, loginResponse] = useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({ username, password })
      .unwrap()
      .then((response) => {
        setLocalStorage("_token", response.token);
        dispatch(
          userActions.login({ token: response.token, user: { ...response } })
        );
        navigate("/", { replace: true });
      });
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      {loginResponse?.error && (
        <Alert message={loginResponse.error.data.message} />
      )}
      <Input
        name="username"
        placeholder={"Enter your username"}
        onChange={onChangeUsernameHandler}
        className={classes["form__input"]}
      />
      <Input
        type="password"
        name="password"
        placeholder={"Enter your password"}
        onChange={onChangePasswordHandler}
        className={classes["form__input"]}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
