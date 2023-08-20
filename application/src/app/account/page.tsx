"use client";
import Image from "next/image";
import { getCookie, deleteCookie } from "cookies-next";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faBookBookmark } from "@fortawesome/free-solid-svg-icons";

interface User {
  _id: string;
  fname: string;
  lname: string;
  email: string;
}

export default function Account() {
  const userCookie = getCookie("user");

  const [user, setUser] = useState<User>();
  const router = useRouter();

  if (!userCookie) {
    router.push("/auth/login");
  }

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

  const logOut = () => {
    deleteCookie("user", {
      path: "/",
    });
    router.push("/auth/login");
  };

  return (
    <section>
      <div
        className="relative flex flex-col content-end justify-end h-[450px] px-4 lg:px-14"
        style={{
          backgroundImage: `url("https://i.ibb.co/C1XVgvC/planets.gif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row items-end justify-start content-start text-white mb-12 lg:-mb-8 h-full">
          <Image
            src="/images/profile-pic.jpg"
            className="rounded-full h-32 lg:h-40 w-32 lg:w-40 ml-2 lg:ml-14"
            alt="profile-pic"
            height={300}
            width={300}
          />
          <div className="flex flex-col justify-center px-4 lg:px-7">
            <p className="text-md lg:text-xl font-light">
              Welcome to Intergalactic
            </p>
            <p className="font-bold text-2xl lg:text-4xl capitalize">
              {" "}
              {user?.fname} {user?.lname}
            </p>
            <p className="font-bold text-lg lowercase">
              {"Logged in as ("}
              {user?.email}
              {")"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-14 gap-20 my-6 lg:my-16 text-white">
        <div className="flex flex-col lg:flex-row justify-between content-center gap-8 w-full lg:w-1/2">
          <div
            id="gradient-border"
            className="hidden lg:flex flex-col py-14 pl-5 justify-center content-center h-48 w-full"
          >
            <p className="font-semibold text-lg mb-3.5">Distance Travelled</p>
            <p className="text-blue-200 font-semibold text-4xl"> Coming Soon</p>
          </div>
          <div
            id="gradient-border"
            className="hidden lg:flex flex-col py-14 pl-5 h-48 justify-center content-center w-full"
          >
            <p className="font-semibold text-lg mb-3.5">Points Collected</p>
            <p className="text-blue-200 font-semibold text-4xl"> Coming Soon</p>
          </div>
        </div>
        <div className="flex flex-col justify-between content-center gap-8 w-full lg:w-1/2">
          <div
            id="gradient-border"
            className="flex flex-col py-6 px-4 lg:px-9 justify-center content-center h-16 w-full"
          >
            <p className="font-semibold text-base">
              <FontAwesomeIcon icon={faUserEdit} className="mr-8" />
              Edit Profile
            </p>
          </div>
          <div
            id="gradient-border"
            className="flex flex-col py-6 px-4 lg:px-9 justify-center content-center h-16 w-full"
          >
            <Link href="/booking-history" className="font-semibold text-base">
              <FontAwesomeIcon icon={faBookBookmark} className="mr-8" />
              My Bookings
            </Link>
          </div>
          <button
            onClick={logOut}
            className="flex flex-col h-16 justify-center content-center w-full border border-red-700 py-6 px-4 lg:px-9"
          >
            <p className="font-semibold text-base text-red-700">Log Out</p>
          </button>
        </div>
      </div>
    </section>
  );
}
