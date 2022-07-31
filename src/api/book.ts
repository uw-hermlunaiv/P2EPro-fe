import { IBook } from "../interfaces/IBook";
import api from "./axios.config";

const resource = "book";

const requests = {
  getBooks: (): Promise<{ data: IBook[] }> => {
    return api.get(resource);
  },
  createBook: (values: IBook): Promise<{ data: IBook[] }> => {
    return api.post(resource, values);
  },
  deleteBook: (id: string): Promise<{ data: IBook[] }> => {
    return api.delete(`${resource}/${id}`);
  },
};

export default requests;
