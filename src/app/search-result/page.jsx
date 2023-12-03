"use client";
import React from "react";
import { useStateContext } from "../context/ContextProvider";

const SearchResult = () => {
  const { search, books } = useStateContext();
  const filteredBooks = books.filter(
    (book) =>
      book.isbn.includes(search) ||
      book.title.toLowerCase().includes(search)
  );
  console.log(filteredBooks);
  return (
    <div className="mt-[5rem] p-10">
      Search Result for: {search}
      <div>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResult;
