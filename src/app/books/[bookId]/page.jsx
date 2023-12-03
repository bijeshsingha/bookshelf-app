"use client";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import Link from "next/link";

const Book = ({ params }) => {
  const { books, setBooks } = useStateContext();

  const [isEdit, setIsEdit] = useState(false);

  //to update the value of the book
  const newArray = books;
  const indexToFind = newArray.findIndex((item) => item.isbn === params.bookId);
  const [newBook, setNewBook] = useState({...newArray[indexToFind]});

  //handle input for the edit
  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  //handle edit
  const handleEditBook = () => {
    setIsEdit(!isEdit);
    newArray[indexToFind] = { ...newArray[indexToFind], ...newBook };
    setBooks(newArray);
    
  };

  //to display the particular book
  const filteredBooks = books.filter(
    (book) => book.isbn.toLowerCase() === params.bookId
  );

  return (
    <div className="mt-[5rem] p-10 ">
      Book details for: ISBN No. {params.bookId}
      <table className="">
        <thead className="">
          <tr>
            <th>sl no</th>
            <th>ISBN Number</th>
            <th>title</th>
            <th>category</th>
            <th>row_number</th>
            <th>count</th>
            <th>cost</th>
            <th>availablity</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={index} className="">
              <td>{index}</td>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>{book.row_number}</td>
              <td>{book.count}</td>
              <td>{book.cost}</td>
              <td>{book.availablity}</td>
            </tr>
          ))}
          {isEdit && <tr>
            <td></td>
            <td></td>
            <td>
              <input
                className="border border-[#33353F] rounded-lg p-2 w-full"
                type="text"
                name="title"
                placeholder="Title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="border border-[#33353F] rounded-lg p-2"
                type="text"
                name="category"
                placeholder="category"
                value={newBook.category}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="border border-[#33353F] rounded-lg p-2"
                type="number"
                name="row_number"
                placeholder="row number"
                value={newBook.row_number}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="border border-[#33353F] rounded-lg p-2"
                type="number"
                name="count"
                placeholder="count"
                value={newBook.count}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="border border-[#33353F] rounded-lg p-2"
                type="number"
                name="cost"
                placeholder="cost"
                value={newBook.cost}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                className="border border-[#33353F] rounded-lg p-2"
                type="text"
                name="availablity"
                placeholder="availability"
                value={newBook.availablity}
                onChange={handleInputChange}
              />
            </td>
          </tr>}
        </tbody>
      </table>
      <div className="flex flex-col justify-center gap-10 w-full ">
        {!isEdit ? (
          <button
            className="border px-5 py-2 shadow-md"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            Edit Book
          </button>
        ) : (
          <button
            className="border px-5 py-2 shadow-md"
            onClick={handleEditBook}
          >
            Save Book
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;
