import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Ninja reaing book</h1>
      <p>Current have {books.length} books to go thorugh</p>
    </div>
  );
};

export default NavBar;
