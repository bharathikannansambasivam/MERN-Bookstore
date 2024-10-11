import React from "react";
import { useNavigate } from "react-router-dom";

function UseNav() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return { goHome };
}

export default UseNav;
