import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
