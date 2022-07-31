import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import { IBook } from "../interfaces/IBook";
import Book from "./Book";

const Books = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="books-container flex flex-col gap-y-4">
      {books.map((book: IBook) => (
        <Book
          key={book?.id}
          id={book?.id}
          title={book?.title}
          author_name={book?.author_name}
        />
      ))}
      {!books.length && <p>No books yet.</p>}
    </div>
  );
};

export default Books;
