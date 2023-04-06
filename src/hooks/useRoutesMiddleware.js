import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useRoutesMiddleware = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const { from } = location?.state || { from: { pathname: "/" } };

    if (user.isAuth && from) {
      navigate(from, { replace: true });
    }
  }, [location]);
};

export default useRoutesMiddleware;
