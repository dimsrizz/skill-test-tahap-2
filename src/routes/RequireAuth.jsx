import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const { isLoggedIn, checkLogin } = useAuthStore();

  useEffect(() => {
    checkLogin();
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate, checkLogin]);

  return isLoggedIn ? children : null;
};

export default RequireAuth;
