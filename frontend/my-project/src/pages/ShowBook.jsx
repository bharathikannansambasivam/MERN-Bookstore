import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookAnimation from "../assets/bookAnimation.jpg";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BackButton from "../components/BackButton";
import loadingImg from "../assets/loading.gif";

function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mern-bookstore-x14c.onrender.com/book/${id}`
        );
        setBook([response.data]);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <BackButton />
      <div>
        {loading ? (
          <div className="h-screen w-screen grid place-items-center">
            <img
              className="h-12   grid place-items-center"
              src={loadingImg}
              alt=""
            />
          </div>
        ) : (
          <div className=" flex justify-center items-center h-screen  font-mono">
            <div>
              <img src={BookAnimation} alt="" />
            </div>
            {book.map((book, index) => (
              <div
                key={index}
                className="bg-red-800 text-white p-10  mr-6 sm:mr-0  sm:text-xl  text-sm  flex flex-col gap-4 rounded-lg hover:scale-105 cursor-pointer hover:bg-red-700 transition-transform "
              >
                <div className="text-3xl sm:texl-xl flex gap-2 justify-center underline">
                  <h1 className="">Book Details</h1>
                  <AutoStoriesOutlinedIcon fontSize="large" />{" "}
                </div>
                <h3>Title: {book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Publish Year: {book.publishYear}</p>
                <p>
                  Updated At:{" "}
                  {new Date(book.updatedAt).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <p>
                  Created At:{" "}
                  {new Date(book.createdAt).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowBook;
