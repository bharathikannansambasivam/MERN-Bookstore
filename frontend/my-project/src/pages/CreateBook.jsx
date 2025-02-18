import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../schema/validationSchema";
import UseNav from "../hooks/UseNav";
import catReadingBook from "../assets/catReading.png";
import BackButton from "../components/BackButton";
function CreateBook() {
  const { goHome } = UseNav();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publishYear: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await axios.post(
          "https://mern-bookstore-4.onrender.com/book",
          values
        );
        console.log(response);
        goHome();
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div>
      <BackButton />
      <div className="flex justify-center place-items-center  h-screen ">
        <div className="max-w-md mx-auto   p-6 bg-white shadow-md rounded-lg">
          <div className="flex w-full justify-center">
            <img className="h-28 text-center " src={catReadingBook} alt="" />
          </div>{" "}
          <h1 className="text-2xl font-bold mb-6 text-center">Create Book</h1>
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
              className="  block mb-2 text-sm font-medium text-gray-700"
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
              htmlFor="published year "
              className="text-sm font-medium text-gray-700"
            >
              Published Year{" "}
            </label>
            <input
              id="publishYear"
              className="w-full px-4 mt-2 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            <button className="w-full bg-green-800 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300">
              Save Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
