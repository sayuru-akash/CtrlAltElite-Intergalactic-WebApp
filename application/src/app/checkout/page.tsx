"use client";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

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

interface CheckoutData {
  _id: string;
  destination_id: string;
  mode_id: string;
  user_id: string;
  departure_date: string;
  passengers: Number;
}

interface User {
  _id: string;
  fname: string;
  lname: string;
  email: string;
}

export default function Checkout() {
  const userCookie = getCookie("user");
  const router = useRouter();

  if (!userCookie) {
    router.push("/auth/login");
  }

  const [user, setUser] = useState<User>();

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

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [checkoutData, setCheckoutData] = useState<CheckoutData>();
  const [destination, setDestination] = useState<Destination>();
  const [mode, setMode] = useState<Mode>();
  const [total, setTotal] = useState<Number>();

  const [fname, setFname] = useState<string>();
  const [lname, setLname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [uin, setUin] = useState<string>();
  const [residency, setResidency] = useState<string>();

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const data = {
      fname: fname,
      lname: lname,
      email: email,
      uin: uin,
      residency: residency,
      destination_id: destination?._id,
      mode_id: mode?._id,
      user_id: user?._id,
      departure_date: checkoutData?.departure_date,
      passengers: Number(checkoutData?.passengers),
      total: Number(total),
    };
    fetch("/api/checkout/confirm", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (response) => {
      const data = await response.json();
      const orderId = data.id;
      if (response.ok) {
        window.location.href = "/checkout/success?id=" + orderId;
      }
    });
  };

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await fetch("/api/checkout?id=" + id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCheckoutData(data);
    };
    fetchCheckoutData();
  }, [id]);

  useEffect(() => {
    const fetchDestination = async () => {
      const response = await fetch(
        "/api/destinations?id=" + checkoutData?.destination_id
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDestination(data);
    };
    fetchDestination();
  }, [checkoutData]);

  useEffect(() => {
    const fetchMode = async () => {
      const response = await fetch("/api/mode?id=" + checkoutData?.mode_id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMode(data);
    };
    fetchMode();
  }, [checkoutData]);

  useEffect(() => {
    const calculateTotal = () => {
      const total = Number(mode?.price) * Number(checkoutData?.passengers);
      setTotal(total);
    };
    calculateTotal();
  }, [mode, checkoutData]);

  return (
    <section>
      {checkoutData && destination && mode && (
        <>
          <div
            className="relative flex flex-col items-center justify-end h-[500px] px-9 lg:px-14 bg-cover bg-center"
            style={{
              backgroundImage: `url(${destination?.destination_cover_img})`,
            }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12 ">
              Complete Booking
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-14 gap-20 my-4 lg:my-16 text-white ">
            <div
              id="gradient-border"
              className="p-4 lg:p-16  px-4 lg:px-28 flex flex-row justify-between lg:hidden"
            >
              <div className="flex-flex-col">
                <Image
                  src={mode?.image}
                  className="w-24 h-48 object-contain"
                  alt="rocket"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-xl  mb-7">
                  <span className="text-sm"> {mode?.name}</span>
                  <br />
                  Earth to {destination?.destination_name}
                </p>
                <p className="font-semibold text-sm mb-5">
                  Departure Date:{" "}
                  <span className="font-light">
                    {checkoutData?.departure_date}
                  </span>
                </p>
                <p className="font-semibold text-sm mb-5">
                  No. of Passengers:{" "}
                  <span className="font-light">
                    {" "}
                    {checkoutData?.passengers.toString()}
                  </span>
                </p>
                <p className="font-semibold text-sm mb-5">
                  Travel Time:{" "}
                  <span className="font-light capitalize">
                    {" "}
                    {mode?.travel_time}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <form className="w-full flex gap-8 flex-col lg:flex-row">
                <div className="flex flex-col w-full lg:w-1/2">
                  <p className="mb-7 font-bold text-2xl">
                    Personal Information
                  </p>
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    required
                    onChange={(event) => setFname(event.target.value)}
                    className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"
                  />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    required
                    onChange={(event) => setLname(event.target.value)}
                    className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"
                  />
                  <input
                    type="text"
                    name="uin"
                    placeholder="Universal Identification Number"
                    minLength={12}
                    maxLength={12}
                    required
                    onChange={(event) => setUin(event.target.value)}
                    className="mb-8 bg-neutral-900 border  text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"
                  />
                  <select
                    name="residency"
                    className="bg-neutral-900 border text-white rounded-lg p-5 font-light text-xl border-0.5 border-white w-full"
                    onChange={(event) => setResidency(event.target.value)}
                    required
                  >
                    <option className="text-gray-600" value="">
                      Select Planet of Residency
                    </option>
                    <option value="earth">Earth</option>
                    <option value="mars">Mars</option>
                    <option value="venus">Venus</option>
                    <option value="jupiter">Jupiter</option>
                  </select>
                  <input
                    type="text"
                    name="destination_id"
                    className="hidden"
                    value={destination._id}
                  />
                  <input
                    type="text"
                    name="mode_id"
                    className="hidden"
                    value={mode?._id}
                  />
                  <input
                    type="text"
                    name="user_id"
                    className="hidden"
                    value={"user-1"}
                  />
                  <input
                    type="text"
                    name="departure_date"
                    className="hidden"
                    value={checkoutData.departure_date}
                  />
                  <input
                    type="number"
                    name="passengers"
                    className="hidden"
                    value={Number(checkoutData.passengers)}
                  />
                  <input
                    type="number"
                    name="total"
                    className="hidden"
                    value={Number(total)}
                  />
                </div>
                <div className="flex flex-col w-full lg:w-1/2">
                  <div
                    id="gradient-border"
                    className="pt-16 pb-14 px-10 hidden lg:flex flex-row justify-between"
                  >
                    <div className="flex flex-col">
                      <p className="font-bold text-4xl  mb-7">
                        <span className="text-xl"> {mode?.name}</span>
                        <br />
                        Earth to {destination.destination_name}
                      </p>
                      <p className="font-semibold text-base mb-5">
                        Departure Date:{" "}
                        <span className="font-light">
                          {" "}
                          {checkoutData?.departure_date}
                        </span>
                      </p>
                      <p className="font-semibold text-base mb-5">
                        No. of Passengers:{" "}
                        <span className="font-light">
                          {" "}
                          {checkoutData?.passengers.toString()}
                        </span>
                      </p>
                      <p className="font-semibold text-base mb-5">
                        Travel Time:{" "}
                        <span className="font-light"> {mode?.travel_time}</span>
                      </p>
                    </div>
                    <div className="flex-flex-col">
                      <Image
                        src={mode?.image}
                        className="w-36 h-48 object-contain"
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
                      <p className="font-bold text-3xl">
                        {" "}
                        {total?.toString()} USD
                      </p>
                    </div>
                    <button
                      className="py-7 px-8 lg:px-28 font-bold text-xl rounded-md mb-14"
                      id="gradient-button"
                      type="button"
                      onClick={submitHandler}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
