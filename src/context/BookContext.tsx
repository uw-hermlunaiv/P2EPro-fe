import { createContext, ReactNode, useEffect, useState } from "react";
import { bookAPI } from "../api";
import { IBook } from "../interfaces/IBook";

export const BookContext = createContext<{
  books: IBook[];
  getBooks(): void;
  createBook(values: IBook): void;
  removeBook(id: string): void;
}>({
  books: [],
  getBooks: () => {},
  createBook: () => {},
  removeBook: () => {},
});

type BookContextProviderType = {
  children: ReactNode;
};

export const BookContextProvider = ({ children }: BookContextProviderType) => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getBooks = async () => {
    try {
      const response = await bookAPI.getBooks();
      setBooks(response?.data);
    } catch (error) {
      throw error;
    }
  };

  const createBook = async (values: IBook) => {
    try {
      await bookAPI.createBook(values);
      getBooks();
    } catch (error) {
      throw error;
    }
  };

  const removeBook = async (id: string) => {
    try {
      await bookAPI.deleteBook(id);
      getBooks();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        getBooks,
        createBook,
        removeBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
