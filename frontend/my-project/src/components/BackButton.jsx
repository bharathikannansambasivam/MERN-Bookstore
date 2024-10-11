import React from "react";
import { useNavigate } from "react-router-dom";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="  relative top-3 left-5    bg-green-600 text-center mt-2 flex gap-2 justify-center items-center text-white p-3 rounded-md "
        onClick={() => navigate("/")}
      >
        <AddHomeOutlinedIcon />
        Back To Home
      </button>
    </div>
  );
}

export default BackButton;
