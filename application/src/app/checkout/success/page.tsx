"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

interface Destination {
  _id: string;
  destination_name: string;
  destination_cover_img: string;
}

interface Mode {
  _id: string;
  name: string;
  image: string;
  travel_time: string;
  price: Number;
}

interface Reservation {
  _id: string;
  destination_id: string;
  mode_id: string;
  user_id: string;
  departure_date: string;
  passengers: number;
  total: number;
  status: string;
}

export default function Success() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [reservation, setReservation] = useState<Reservation>();
  const [destination, setDestination] = useState<Destination>();
  const [mode, setMode] = useState<Mode>();

  useEffect(() => {
    fetch(`/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => setReservation(data));
  }, [id]);

  useEffect(() => {
    fetch(`/api/destination?id=${reservation?.destination_id}`)
      .then((response) => response.json())
      .then((data) => setDestination(data));
  }, [reservation?.destination_id]);

  useEffect(() => {
    fetch(`/api/mode?id=${reservation?.mode_id}`)
      .then((response) => response.json())
      .then((data) => setMode(data));
  }, [reservation?.mode_id]);

  return (
    <section className="mt-44 lg:mt-72">
      <div className="flex flex-col justify-center items-center mx-4 lg:mx-14 gap-20 my-4 lg:my-16 text-white ">
        <div className="flex flex-col pt-16 pb-14 px-10">
          <div className="flex flex-col text-center justify-center items-center content-center mb-9">
            <Image
              src="/images/check.png"
              alt="check"
              className="h-44 w-52"
              width={300}
              height={300}
            />
            <p className="font-bold text-4xl mb-7">Successful Reservation</p>
            <p className="text-xl font-light max-w-[650px]">
              Your reservation has been successfully made. You will receive an
              your ticket on your email shortly. Thank you for choosing
              intergalactic flights.
            </p>
          </div>
          <Link
            href="/account"
            className="w-full py-7 px-0 lg:px-28 font-bold text-xl rounded-md mb-14 align-middle items-center flex flex-row justify-center"
            id="glowing-border"
          >
            Visit Profile &nbsp;
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="animate-pulse"
            />
          </Link>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <div
            id="gradient-border"
            className="pt-16 pb-14 px-4 lg:px-10 flex flex-row justify-between"
          >
            <div className="flex flex-col">
              <p className="font-bold text-2xl mb-7">
                <span className="text-sm"> {mode?.name}</span>
                <br />
                Earth to {destination?.destination_name}
              </p>
              <p className="font-semibold text-sm mb-5">
                Departure Date:{" "}
                <span className="font-light">
                  {" "}
                  {reservation?.departure_date}
                </span>
              </p>
              <p className="font-semibold text-sm mb-5">
                No. of Passengers:{" "}
                <span className="font-light"> {reservation?.passengers}</span>
              </p>
              <p className="font-semibold text-sm mb-5">
                Travel Time:{" "}
                <span className="font-light capitalize">
                  {" "}
                  {mode?.travel_time}
                </span>
              </p>
            </div>
            <div className="flex-flex-col">
              <Image
                src={mode?.image || "/images/rocket.png"}
                className="w-40 h-40"
                alt="rocket"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className="flex flex-col content-center justify-center px-7"
            id="gradient-border"
          >
            <div className="flex flex-row justify-between items-center mt-10 mb-5">
              <p className="text-xl font-light">Total</p>
              <p className="font-bold text-3xl">{reservation?.total} USD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
