"use client";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";

interface User {
  _id: string;
  fname: string;
  lname: string;
  email: string;
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
  destination: Destination;
  mode: Mode;
}

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

export default function BookingHistory() {
  const userCookie = getCookie("user");

  const [user, setUser] = useState<User>();
  const [reservations, setReservations] = useState<Reservation[]>();

  useEffect(() => {
    fetch(`http://localhost:3000/api/user?id=${userCookie}`)
      .then(async (res) => {
        const json = await res.json();
        setUser(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userCookie]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reservations?id=${user?._id}`)
      .then(async (res) => {
        const json = await res.json();
        setReservations(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?._id]);

  const fetchReservationDetails = async (reservation: Reservation) => {
    const destinationResponse = await fetch(
      `/api/destination?id=${reservation.destination_id}`
    );
    const destinationData = await destinationResponse.json();
    const modeResponse = await fetch(`/api/mode?id=${reservation.mode_id}`);
    const modeData = await modeResponse.json();

    return { destination: destinationData, mode: modeData };
  };

  useEffect(() => {
    if (reservations) {
      const reservationDetails = reservations.map((reservation) =>
        fetchReservationDetails(reservation)
      );
      Promise.all(reservationDetails).then((data) => {
        const reservationsWithDetails = reservations.map((reservation, i) => {
          return {
            ...reservation,
            destination: data[i].destination,
            mode: data[i].mode,
          };
        });
        setReservations(reservationsWithDetails);
      });
    }
  }, [reservations]);

  return (
    <section className="">
      <div
        className="relative flex flex-col items-center justify-end h-[400px] lg:h[650px] px-9 "
        style={{
          backgroundImage: `url(/images/hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Reservation History
        </p>
        <p className="text-white font-bold text-lg lowercase mb-12">
          {"for user ("}
          {user?.email}
          {")"}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg-flex-row justify-between gap-8  text-xl font-normal text-white mt-16 mx-4 lg:mx-14">
        {reservations?.map((reservation) => (
          <>
            <div
              className="flex flex-col justify-start items-start text-left gradient-border rounded-md py-9 px-5 h-96 w-full"
              id="glowing-border"
              style={{
                backgroundImage: `url(${reservation?.destination?.destination_cover_img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-1/3 lg:h-1/2 flex flex-row">
                <p className="font-semibold text-base text-green-400">
                  {reservation?.status}
                </p>
              </div>
              <div className="h-1/2 flex flex-row w-full gap-20">
                <div className="w-full lg:w-1/2">
                  <p className="font-light text-base">From</p>
                  <p className="font-bold text-2xl mb-5 capitalize">EARTH</p>
                  <p className="font-semibold text-base mb-1">
                    Departure Date:{" "}
                    <span className="font-light">
                      {reservation?.departure_date}
                    </span>
                  </p>
                  <p className="font-semibold text-base mb-1">
                    Mode:{" "}
                    <span className="font-light">
                      {reservation?.mode?.name}
                    </span>
                  </p>
                </div>
                <div className="w-full lg:w-1/2 items">
                  <p className="font-light text-base">To</p>
                  <p className="font-bold text-2xl mb-5">
                    {reservation?.destination?.destination_name}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
