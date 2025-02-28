import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";

import bookStoreImg from "../assets/bookstore.gif";

import loadingImg from "../assets/loading.gif";

function Home() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const respose = await axios.get(
          "https://mern-bookstore-4.onrender.com/allbooks"
        );
        const data = respose.data;
        setBook(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [book]);
  return (
    <div>
      {loading ? (
        <div className=" grid h-screen place-items-center">
          {" "}
          <img className="h32 w-32" src={loadingImg} alt="" />
        </div>
      ) : (
        <div>
          {" "}
          <div className="sm:flex flex justify-between p-5 sm:justify-between sm:px-10 sm:py-3  ">
            <div className="flex gap-1 font-serif  items-center ">
              <img className="h-10 w-10 " src={bookStoreImg} alt="" />
              <h3 className="text-xl sm:flex  sm:place-items-center">
                {" "}
                <span className="text-red-800 text-3xl">B</span>ook{" "}
                <span className="text-blue-800 text-3xl"> L</span>
                ist
              </h3>
            </div>
            <Link
              to="/create"
              className="flex  border bg-green-800 gap-2 rounded-md p-1.5 text-white px-3 items-center"
            >
              <AddBoxIcon
                className="   hover:text-green-600 cursor-pointer hover:scale-110 transition-transform"
                fontSize="large"
              />
              <p className="hidden sm:block"> Add Book</p>
            </Link>{" "}
          </div>
          <table className="border-separate border-spacing-2 w-full text-center ">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md hidden sm:block ">
                  No
                </th>
                <th className="border border-slate-600 rounded-md">Title </th>
                <th className="border border-slate-600 rounded-md">Author</th>
                <th className="border border-slate-600 rounded-md">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {book.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className=" border  border-slate-700 rounded-md text-center p-3 "
                  >
                    No data available. Please add some books.
                  </td>
                </tr>
              ) : (
                book.map((book, index) => (
                  <tr key={index}>
                    <td className="border border-slate-700 rounded-md text-center hidden sm:block ">
                      {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center ">
                      {book.title}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center ">
                      {book.author}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center ">
                      {book.publishYear}
                    </td>

                    <td className="border border-slate-700 rounded-md">
                      <div className="flex justify-center gap-3">
                        <Link to={`/details/${book._id}`}>
                          {" "}
                          <InfoOutlinedIcon className="text-blue-600" />
                        </Link>
                        <Link to={`/edit/${book._id}`}>
                          <EditOutlinedIcon className="text-yellow-600" />
                        </Link>{" "}
                        <Link to={`/delete/${book._id}`}>
                          <DeleteOutlineOutlinedIcon className="text-red-600" />
                        </Link>{" "}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
