import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducer/bookReducer";
//import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(
    bookReducer,
    [
      // { title: "title1", author: "author1", id: 1 },
      // { title: "title2", author: "author2", id: 2 },
      // { title: "title3", author: "author3", id: 3 },
    ],
    () => {
      const localData = localStorage.getItem("books");
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  //   const addBook = (title, author) => {
  //     setBooks([...books, { title, author, id: uuid() }]);
  //   };

  //   const removeBook = (id) => {
  //     setBooks(
  //       books.filter((book) => {
  //         if (book.id !== id) return true;
  //         else return false;
  //       })
  //     );
  //   };

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
