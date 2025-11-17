import React, { use } from "react";
import { AuthContext } from "../../components/contextapis/Context";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  // 1st variable
  const { user, loading } = use(AuthContext);

  // 2nd condition
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivateRouter;
