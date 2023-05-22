import AuthUser from "../components/AuthUser";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ component: component, ...rest }) => {
  //get token from auth
  const { getToken } = AuthUser();

  return getToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
