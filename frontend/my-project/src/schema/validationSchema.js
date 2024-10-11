import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Please enter the book title"),
  author: Yup.string().required("Please enter the author's name"),
  publishYear: Yup.number()
    .min(1000, "Must be a 4-digit number")
    .max(2025, "Must be a year before 2026")
    .required("Please enter the published year")
    .typeError("Year must be a number"),
});

export default validationSchema;
