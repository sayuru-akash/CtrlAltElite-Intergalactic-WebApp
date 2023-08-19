"use client";
import { useState, useEffect } from "react";
import {
  faCalendar,
  faChevronRight,
  faCircle,
  faFilter,
  faSearch,
  faUsers,
  faSun,
  faCloud,
  faWind,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface Destination {
  _id: string;
  destination_name: string;
  destination_globe_img: string;
  destination_cover_img: string;
  destination_tagline: string;
  description: string;
  culture: String;
  weather: String;
}

interface TransportModes {
  _id: string;
  destination_id: string;
  name: string;
  image: string;
  travel_time: string;
  includes: string;
  price: Number;
  max_capacity: Number;
}

export default function DestinationSingle({
  params,
}: {
  params: { slug: string };
}) {
  const [destination, setDestination] = useState<Destination>();
  const [transportModes, setTransportModes] = useState<TransportModes[]>([]);
  const [showSchedule, setShowSchedule] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    fetch(`/api/destination?id=${params.slug}`)
      .then((response) => response.json())
      .then((data) => setDestination(data));
  }, [params.slug]);

  useEffect(() => {
    fetch(`/api/modes?id=${params.slug}`)
      .then((response) => response.json())
      .then((data) => setTransportModes(data));
  }, [params.slug]);

  return (
    <section>
      <div
        className="relative flex flex-col items-start justify-end min-h-[450px] lg:min-h-[700px] px-9 lg:px-14"
        style={{
          backgroundImage: `url(${destination?.destination_cover_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2.5">
          {destination?.destination_name}
        </h1>
        <p className="text-xl font-normal text-white mb-16">
          {destination?.destination_tagline}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-4 items-center font-bold text-2xl text-white -mt-8 mx-9 mb-16 lg:mb-14">
        <button
          onClick={() => {
            setShowSchedule(true);
            setShowAbout(false);
          }}
          className="relative bg-black opacity-75 backdrop-blur-2 w-full lg:w-96 h-32 lg:h-16 flex items-center justify-center"
          id="glowing-border"
        >
          Schedule Your Flight
        </button>

        <button
          onClick={() => {
            setShowAbout(true);
            setShowSchedule(false);
          }}
          className="relative bg-black opacity-75 backdrop-blur-2 w-full lg:w-96 h-16 flex items-center justify-center mx-9"
          id="glowing-border"
        >
          About {destination?.destination_name.slice(0, 8)}
        </button>
      </div>
      {showSchedule && (
        <>
          <div id="scheduleSection" className="mx-9 lg:mx-16 flex flex-col">
            <p className="text-white font-extralight text-xl mb-2.5">
              Search Flights by Departure date and number of passengers
            </p>
            <div
              className="flex flex-col lg:flex-row justify-between content-center px-4 lg:px-16 py-6 text-white "
              id="glowing-border"
            >
              <div className="flex flex-row justify-between items-center">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-xl lg:text-3xl px-1 lg:px-3.5"
                />
                <div className="flex flex-col w-full px-3.5">
                  <p className="font-extralight w-full text-sm lg:text-xl">
                    Departure Date
                  </p>
                  <p className="text-xl lg:text-3xl font-bold">23, Aug</p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="w-0.5 h-16 bg-gray-500 hidden lg:flex"></div>
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text:xl lg:text-3xl px-1 lg:px-3.5"
                />
                <div className="flex flex-col w-full px-3.5 mt-3 lg:mt-0">
                  <p className="font-extralight w-full text-sm lg:text-xl">
                    No. of Passengers
                  </p>
                  <p className="text-xl lg:text-3xl font-bold">7</p>
                </div>
              </div>
              <div className="w-0.5 h-16 bg-gray-500 sm:mx-3.5 hidden lg:flex"></div>
              <hr className="w-full my-4 lg:hidden" />
              <div className="flex flex-row justify-center items-center mt-3 lg:mt-0 w-full lg:w-fit">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-2xl lg:text-3xl px-1 lg:px-3.5"
                />
              </div>
            </div>
          </div>
          <div className="mx-9 lg:mx-14 flex flex-col mt-8 pb-11">
            <div className="flex flex-row justify-between items-center content-center">
              <p className="text-white font-extralight text-md lg:text-xl ">
                Search Options
              </p>
              <button className="text-white text-md lg:text-xl font-medium">
                Filter
                <FontAwesomeIcon
                  icon={faFilter}
                  className="text-white ml-3.5"
                />
              </button>
            </div>
          </div>
          <div className="mx-4 lg:mx-14 flex flex-col lg:flex-row flex-wrap justify-between text-white">
            {transportModes.map((transportMode) => (
              <div
                className="flex flex-row content-center w-full lg:w-1/2 mb-4 lg:mb-0 p-0 lg:p-4"
                key={transportMode._id}
              >
                <div
                  id="glowing-border"
                  className="flex flex-row w-full justify-between"
                >
                  <div className="flex flex-col justify-center content-center w-1/2">
                    <Image
                      src={transportMode.image}
                      className="h-32 lg:h-48 w-28 lg:w-32 object-fit my-6 lg:my-12 ml-4 lg:ml-12"
                      alt="rocket"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-col justify-between content-center my-12 lg:my-16 w-1/2">
                    <p className="font-semibold text-lg lg:text-xl mb-3">
                      {transportMode.name}
                    </p>
                    <ul className="mb-6">
                      <li className="text-md lg:text-lg font-light">
                        <FontAwesomeIcon icon={faCircle} />{" "}
                        {transportMode.travel_time} Travel Time
                      </li>
                      <li className="text-md lg:text-lg font-light">
                        <FontAwesomeIcon icon={faCircle} />{" "}
                        {transportMode.includes} Included
                      </li>
                      <li className="text-md lg:text-lg font-light">
                        <FontAwesomeIcon icon={faCircle} /> Upto{" "}
                        {transportMode.max_capacity.toString()} Passengers
                      </li>
                    </ul>
                    <p
                      className="text-3xl font-semibold text-white"
                      id="text-gradient"
                    >
                      ${transportMode.price.toString()}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center content-center">
                    <FontAwesomeIcon icon={faChevronRight} className="mr-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {showAbout && (
        <div id="aboutSection" className="px-9 lg:px-36 text-white">
          <p className="font-bold text-2xl mb-6">Description</p>
          <p className="font-normal text-xl mb-12 text-gray-400">
            {destination?.description}
          </p>
          <p className="font-bold text-2xl mb-6">Learn about Culture</p>
          <p className="font-normal text-xl mb-12 text-gray-400">
            {destination?.culture}
          </p>
          <p className="font-bold text-2xl mb-6">Current Weather Forecast</p>
          <p className="font-normal capitalize text-xl mb-12 text-gray-400">
            {destination?.weather === "sunny" && (
              <FontAwesomeIcon
                icon={faSun}
                className="text-yellow-400 text-xl mr-3.5"
              />
            )}
            {destination?.weather === "cloudy" && (
              <FontAwesomeIcon
                icon={faCloud}
                className="text-gray-400 text-xl mr-3.5"
              />
            )}
            {destination?.weather === "windy" && (
              <FontAwesomeIcon
                icon={faWind}
                className="text-gray-400 text-xl mr-3.5"
              />
            )}
            {destination?.weather === "rainy" && (
              <FontAwesomeIcon
                icon={faCloudRain}
                className="text-gray-400 text-xl mr-3.5"
              />
            )}
            {destination?.weather === "snowy" && (
              <FontAwesomeIcon
                icon={faSnowflake}
                className="text-white text-xl mr-3.5"
              />
            )}
            {destination?.weather} until v3
          </p>
          <p className="font-bold text-2xl mb-6">Gallery</p>
          <Image
            src="/images/pandora.png"
            alt="pandora"
            width={1500}
            height={800}
            className="w-full  mb-12"
          />
        </div>
      )}
    </section>
  );
}
