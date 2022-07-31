import { Formik, FormikHelpers } from "formik";
import { useContext } from "react";
import BookContext from "../context/BookContext";
import * as Yup from "yup";
import { IBook } from "../interfaces/IBook";
import Input from "./Input";

const BookSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title is too short")
    .required("Title is required"),
  author_name: Yup.string().required("Author is required"),
});

const initialValues: IBook = {
  title: "",
  author_name: "",
};

const BookForm = () => {
  const { createBook } = useContext(BookContext);

  const addBook = async (values: IBook, helpers: FormikHelpers<IBook>) => {
    try {
      await createBook(values);
      helpers.resetForm();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={addBook}
      validationSchema={BookSchema}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form className="" onSubmit={handleSubmit}>
          <Input name="title" label="Title" className="mb-2" />
          <Input name="author_name" label="Author Name" className="mb-4" />
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-green-500 text-green-200 p-1.5 rounded-lg"
          >
            Create
          </button>
        </form>
      )}
    </Formik>
  );
};

export default BookForm;
