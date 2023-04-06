import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login", { replace: true, state: { from: location } });
    }
  }, [isAuth, location]);

  return props.component;
};

export default ProtectedRoute;
