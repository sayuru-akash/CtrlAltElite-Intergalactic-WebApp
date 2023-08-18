"use client";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Reservations {
  id: number;
  name: string;
  user_id: string;
  departure_date: string;
  departure_location: string;
  arrival_date: string;
  arrival_location: string;
}

const reservationsData: Reservations[] = [
  {
    id: 1,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 3,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 4,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 5,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 6,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 7,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 8,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 9,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 10,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 11,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 12,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 13,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 14,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 15,
    name: "John Doe",
    user_id: "1",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
  {
    id: 16,
    name: "Jane Smith",
    user_id: "2",
    departure_date: "2021-10-10",
    departure_location: "New York",
    arrival_date: "2021-10-10",
    arrival_location: "New York",
  },
];

function ReservationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredReservations = reservationsData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReservations.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReservations = filteredReservations.slice(startIndex, endIndex);

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
            Reservations Management
          </h1>
        </div>
        <div className="mb-4 flex items-center w-full">
          <div className="relative w-full">
            <input
              type="text"
              className="text-white pl-12 pr-3 py-2 w-full border bg-gray-900 lg:rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search reservations with reservation id, user id, or name..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute left-3 top-2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border divide-y divide-pink-200 ">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Reservation ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Departure Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Departure Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Arrival Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Arrival Location
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-950 divide-y divide-pink-200">
              {currentReservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">
                      {reservation.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/admin/users/${reservation.user_id}`}>
                      <div className="text-sm text-gray-200">
                        {reservation.name}
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-200">
                      {reservation.departure_date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-200">
                      {reservation.departure_location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-200">
                      {reservation.arrival_date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-200">
                      {reservation.arrival_location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex justify-end items-end">
                    <button className="text-indigo-400 hover:text-indigo-600 text-sm">
                      View &nbsp; &nbsp;|&nbsp; &nbsp;
                    </button>
                    <button className="text-red-600 hover:text-red-900 text-sm">
                      Cancel
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

export default ReservationsPage;
