import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import validationSchema from "../schema/validationSchema";
import useNav from "../hooks/UseNav";
import editBook from "../assets/editBook.gif";

function EditBook() {
  const { goHome } = useNav();
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publishYear: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = axios.put(`http://localhost:3000/book/${id}`, values);
        console.log(response);
        goHome();
      } catch (e) {
        console.log(e.message);
      }
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/book/${id}`);
        formik.setValues({
          title: response.data.title,
          author: response.data.author,
          publishYear: response.data.publishYear,
        });
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="flex w-full justify-center items-center "></div>
        <div className="flex  flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-6 ">Edit Book</h1>
          <img className="h-32 w-32 " src={editBook} alt="Edit Book" />
        </div>

        <form onSubmit={formik.handleSubmit}>
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Enter book title"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-sm text-center">
              {formik.errors.title}
            </div>
          ) : null}

          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="author"
          >
            Author
          </label>
          <input
            id="author"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.author}
            placeholder="Enter book author name"
          />
          {formik.touched.author && formik.errors.author ? (
            <div className="text-red-500 text-sm text-center">
              {formik.errors.author}
            </div>
          ) : null}

          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="publishYear"
          >
            Publish Year
          </label>
          <input
            id="publishYear"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.publishYear}
            placeholder="Enter book publish year"
          />
          {formik.touched.publishYear && formik.errors.publishYear ? (
            <div className="text-red-500 text-sm text-center mb-5">
              {formik.errors.publishYear}
            </div>
          ) : null}

          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-700  text-white font-semibold py-2 rounded-md  transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;
