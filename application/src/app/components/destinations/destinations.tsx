"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faEarthAmericas,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Destination {
  _id: string;
  departure_name: string;
  destination_name: string;
  destination_cover_img: string;
  description: string;
}

function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filteredDestinations, setFilteredDestinations] = useState<
    Destination[]
  >([]);
  const [currentDestinations, setCurrentDestinations] = useState<Destination[]>(
    []
  );

  useEffect(() => {
    try {
      fetch("/api/destinations")
        .then((response) => response.json())
        .then((data) => {
          setDestinations(data);
          setFilteredDestinations(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const destinationsPerPage = 2;

  useEffect(() => {
    if (!destinations) return;
    let filtered = Array();
    if (!searchQuery && !sortQuery) {
      setFilteredDestinations(destinations);
      return;
    } else if (searchQuery && !sortQuery) {
      filtered = destinations.filter((destination) =>
        destination.destination_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    } else if (!searchQuery && sortQuery) {
      filtered = destinations.filter((destination) =>
        destination.departure_name
          .toLowerCase()
          .includes(sortQuery.toLowerCase())
      );
    } else {
      filtered = destinations.filter(
        (destination) =>
          destination.destination_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) &&
          destination.departure_name
            .toLowerCase()
            .includes(sortQuery.toLowerCase())
      );
    }

    setFilteredDestinations(filtered);
  }, [searchQuery, sortQuery, destinations]);

  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;

  useEffect(() => {
    if (!filteredDestinations || !filteredDestinations.length) {
      setCurrentDestinations([]);
      return;
    }
    const current = filteredDestinations?.slice(
      indexOfFirstDestination,
      indexOfLastDestination
    );
    setCurrentDestinations(current);
  }, [
    currentPage,
    filteredDestinations,
    indexOfFirstDestination,
    indexOfLastDestination,
  ]);

  const totalPages = Math.ceil(
    filteredDestinations?.length / destinationsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    setCurrentPage(1);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortQuery = event.target.value;
    setSortQuery(newSortQuery);
    setCurrentPage(1);
  };

  return (
    <section className="px-4 lg:px-12 py-32" id="destinations">
      <div className="flex flex-col lg:flex-row lg-flex-row gap-8 text-xl font-normal mb-7 mx-4">
        <div className="flex w-full lg:w-1/2 items-center gradient-border">
          <select
            className="w-full px-6 py-5 bg-black rounded-md text-white"
            onChange={(e) => handleSortChange(e)}
          >
            <option value="">Select a departure planet</option>
            <option value="Earth19996">From: Earth 19996</option>
            <option value="Earth616">From: Earth 616</option>
            <option value="Earth833">From: Earth 833</option>
            <option value="Mars">From: Mars</option>
            <option value="Venus">From: Venus</option>
            <option value="Mercury">From: Mercury</option>
            <option value="Jupiter">From: Jupiter</option>
            <option value="Saturn">From: Saturn</option>
          </select>
          <div className="relative right-4">
            <FontAwesomeIcon icon={faEarthAmericas} className="text-white" />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 items-center gradient-border">
          <input
            type="text"
            className="w-full px-6 py-5 bg-transparent rounded-md text-white focus:outline-none bg-black"
            placeholder="Search"
            name="search"
            id="search"
            onChange={handleSearchChange}
          />
          <div className="relative right-4">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap justify-between text-xl font-normal text-white">
        {(currentDestinations &&
          currentDestinations.length &&
          currentDestinations.map((destination: Destination) => (
            <div
              className="flex flex-row h-96 w-full lg:w-1/2 p-4"
              key={destination?._id}
            >
              <div
                className="glowing-border flex flex-col justify-end bg-cover bg-center content-center text-left gradient-border rounded-md py-9 px-5 h-full w-full"
                style={{
                  backgroundImage: `url(${destination?.destination_cover_img})`,
                }}
              >
                <p className="font-bold text-2xl mb-3.5">
                  {destination?.destination_name}
                </p>
                <p className="font-thin text-xl mb-5">
                  {destination?.description?.slice(0, 100)}...
                </p>
                <Link
                  href={`/destination/${destination?._id}`}
                  className="text-yellow-200 font-bold"
                >
                  VIEW FLIGHTS{" "}
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="animate-pulse"
                  />
                </Link>
              </div>
            </div>
          ))) || (
          <div className="flex flex-row h-96 w-full lg:w-1/2 p-4">
            <p className="font-bold text-2xl mb-3.5">
              No destinations found for your query
            </p>
          </div>
        )}
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
                onClick={() => handlePageChange(index + 1)}
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
    </section>
  );
}

export default Destinations;
