"use client";
import React, { useEffect, useState } from "react";
import { useStateContext } from "./context/ContextProvider";

const Admin = () => {
  const { books, setBooks } = useStateContext();
  const [newBook, setNewBook] = useState({
    title: "",
    isbn: "",
    category: "",
    row_number: "",
    count: "",
    cost: "",
    availablity: "",
  });
  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    const isDuplicate = books.some((book) => book.isbn === newBook.isbn);
    if (!isDuplicate) {
      setBooks((prevState) => [...prevState, newBook]);
    }
    setNewBook({
      title: "",
      isbn: "",
      category: "",
      row_number: "",
      count: "",
      cost: "",
      availablity: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    console.log(localStorage.getItem("books"));
  }, [books]);

  return (
    <div className="lg:w-1/3 w-full py-10">
      <h2 className="text-center text-xl font-semibold pb-10">Add Book</h2>
      <div className="flex flex-col justify-center gap-10 w-full ">
        <input
          className="border border-[#33353F] rounded-lg p-2 w-full"
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          className="border border-[#33353F] rounded-lg p-2"
          type="number"
          name="isbn"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={handleInputChange}
        />
        <input
          className="border border-[#33353F] rounded-lg p-2"
          type="text"
          name="category"
          placeholder="category"
          value={newBook.category}
          onChange={handleInputChange}
        />
        <input
          className="border border-[#33353F] rounded-lg p-2"
          type="number"
          name="row_number"
          placeholder="row number"
          value={newBook.row_number}
          onChange={handleInputChange}
        />
        <input
          className="border border-[#33353F] rounded-lg p-2"
          type="number"
          name="count"
          placeholder="count"
          value={newBook.count}
          onChange={handleInputChange}
        />
        <input
          className="border border-[#33353F] rounded-lg p-2"
          type="number"
          name="cost"
          placeholder="cost"
          value={newBook.cost}
          onChange={handleInputChange}
        />
        <input
          className="border border-[#33353F] rounded-lg p-2"
          type="text"
          name="availablity"
          placeholder="availability"
          value={newBook.availablity}
          onChange={handleInputChange}
        />
        <button className="border px-5 py-2 shadow-md" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
      <div className="mt-10">
        Caution: if ISBN is duplicate the entry would not be added! Click show
        admin to view the list
      </div>
    </div>
  );
};

export default Admin;
