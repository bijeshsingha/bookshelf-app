// context/BookContext.js
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ books, setBooks, search, setSearch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
