"use client";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const usersData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
  { id: 1, name: "Carl Smith", email: "carl@example.com", role: "Admin" },
  { id: 2, name: "Curly Dianne", email: "curly@example.com", role: "User" },
];

function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col h-full w-full lg:w-3/4">
        <div className="w-full lg:w-1/3 bg-gray-800 rounded-md p-4 mb-4 shadow-md">
          <h1 className="text-xl font-semibold text-gray-200">
            User Management
          </h1>
        </div>
        <div className="mb-4 flex items-center w-full">
          <div className="relative w-full">
            <input
              type="text"
              className="text-white pl-12 pr-3 py-2 w-full lg:w-5/6 border lg:border-r-0 bg-gray-900 lg:rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search users with name or email..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute left-3 top-2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 lg:rounded-r-md w-full lg:w-1/6 border mt-4 lg:mt-0">
              Add User
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border divide-y divide-pink-200 ">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-950 divide-y divide-pink-200">
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">
                      {user.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-200">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-200">{user.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex justify-end items-end">
                    <button className="text-indigo-400 hover:text-indigo-600 text-sm">
                      View &nbsp; &nbsp;|&nbsp; &nbsp;
                    </button>
                    <button className="text-blue-400 hover:text-blue-600 text-sm">
                      Edit &nbsp; &nbsp;| &nbsp; &nbsp;
                    </button>
                    <button className="text-red-600 hover:text-red-900 text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <nav
            className="flex justify-between items-center"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousPage}
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 bg-gray-900 border border-gray-700 rounded-md hover:bg-gray-800"
            >
              Previous
            </button>
            <div className="hidden md:flex gap-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index + 1)}
                  className={`px-4 py-2 -mx-px text-sm font-medium text-gray-200 bg-gray-900 border ${
                    index + 1 === currentPage
                      ? "border-indigo-400"
                      : "border-gray-700"
                  } rounded-md hover:bg-gray-800`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 bg-gray-900 border border-gray-700 rounded-md hover:bg-gray-800"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default UsersPage;
