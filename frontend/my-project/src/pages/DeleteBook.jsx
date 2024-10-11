import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useNav from "../hooks/UseNav";
import warning from "../assets/warning.png";
function DeleteBook() {
  const { id } = useParams();
  const { goHome } = useNav();
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    const deleteBook = async () => {
      try {
        const response = await axios.delete(
          `https://mern-bookstore-x14c.onrender.com/book/${id}`
        );

        goHome();
      } catch (e) {
        console.log(e.message);
      }
    };

    if (isDelete) {
      deleteBook();
    }
  }, [isDelete, goHome, id]);

  const handleDelete = () => {
    setIsDelete(true);
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-50 p-10 px-12 rounded-xl ">
        <div className="flex place-items-center gap-3 p-2">
          <div className="bg-red-200 justify-center items-center w-max p-2 rounded-full ">
            <img className="h-4 w-4  " src={warning} alt="" />
          </div>
          <p className="text-xl placeholder:sm:text-3xl">
            Are you absolutely sure?
          </p>
        </div>
        <p className="text-xs ">
          This action can not be undone. This will permanently delete
        </p>
        <div className="flex justify-between mt-3">
          <button
            className="border-black border rounded px-3 hover:scale-105 hover:bg-slate-100  transition-transform  p-2"
            onClick={goHome}
          >
            Cancel
          </button>

          <button
            className="   rounded-md px-3  p-2 bg-red-600 hover:scale-105 hover:bg-red-500 transition-transform text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
