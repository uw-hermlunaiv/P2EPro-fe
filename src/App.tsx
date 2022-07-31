import BookForm from "./components/BookForm";
import Books from "./components/Books";
import { BookContextProvider } from "./context/BookContext";

function App() {
  return (
    <BookContextProvider>
      <div className="max-w-md mx-auto flex flex-col gap-y-12 py-10">
        <Books />
        <BookForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
