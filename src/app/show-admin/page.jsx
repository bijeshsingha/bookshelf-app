"use client";
import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import Link from "next/link";
import QRCodeComponent from "../qr-code/QRCode";
import { useRouter } from "next/navigation";
const ShowAdmin = () => {
  const { books, setBooks, search, setSearch } = useStateContext();
  const [localSearch, setLocalSearch] = useState(" ");
  const handleSearch = () => {
    const searchTerm = localSearch;
    setSearch(() => searchTerm);
  };

  const router = useRouter()

  const handleInputChange = (e) => {
    // Get the value from the input
    const newValue = e.target.value;
    // Update the state with the new value
    setLocalSearch(newValue);
  };

  const handleRemove = (isbn) => {
    const filtered = books.filter(function (book) {
      return book.isbn != isbn;
    });
    setBooks(filtered);
  };
  return (
    <div className="mt-[2rem] p-10">
      <div className="flex justify-center py-10 w-auto text-black gap-5">
        <input
          className="border border-[#33353F] rounded-lg p-2 placeholder-[#8B8B8B] placeholder-opacity-50"
          type="text"
          name="search"
          placeholder="Search by ISBN or Title"
          value={localSearch}
          onChange={handleInputChange}
        />
        <Link href={"/search-result"}>
          <button
            className="border px-5 py-2 shadow-md"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </Link>
      </div>
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
            <th>Action</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className="">
              <td>{index}</td>
              <td>{book.isbn}</td>
              <td>
                <Link href={`/books/${book.isbn}`}>{book.title}</Link>
              </td>
              <td>{book.category}</td>
              <td>{book.row_number}</td>
              <td>{book.count}</td>
              <td>{book.cost}</td>
              <td>{book.availablity}</td>
              <td className="">
                <Link  href={`/books/${book.isbn}`}>
                  <button className='border-2 px-2'>Edit</button>
                  </Link>
                <button
                className="border-2 px-2 ml-2"
                  onClick={() => {
                    handleRemove(book.isbn);
                  }}
                >
                  Remove
                </button>
              </td>
              <td><QRCodeComponent value={`http://localhost:3000/books/${book.isbn}`} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ShowAdmin;
