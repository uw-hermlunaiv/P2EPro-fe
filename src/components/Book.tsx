import { useCallback, useContext } from "react";
import BookContext from "../context/BookContext";
import { IBook } from "../interfaces/IBook";
import Icon from "./Icon";

const Book = ({ id, title, author_name: authorName }: IBook) => {
  const { removeBook } = useContext(BookContext);

  const deleteBook = useCallback(async () => {
    if (id) {
      removeBook(id);
    }
  }, [id, removeBook]);

  return (
    <div className="bg-gray-200 p-4 rounded-xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="text-xl font-bold mb-1.5">{title}</p>
          <p>{authorName}</p>
        </div>
        <button onClick={deleteBook}>
          <Icon name="x" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Book;
