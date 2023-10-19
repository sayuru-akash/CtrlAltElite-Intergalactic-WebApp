"use client";
import Link from "next/link";
import { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function LoginPage() {
  const userCookie = getCookie("user");

  const router = useRouter();

  if (userCookie) {
    router.push("/account");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }
    setErrorMessage("");

    const data = {
      email: email,
      password: password,
    };

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const json = await res.json();
        if (json.id) {
          setSuccessMessage("User logged in successfully.");
          // clear form
          setEmail("");
          setPassword("");
          // set cookie with user id
          setCookie("user", json.id, {
            sameSite: "lax",
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
          });
        } else {
          setErrorMessage("Invalid user credentials or something went wrong.");
          setSuccessMessage("");
        }
      })
      .catch((err) => {
        setErrorMessage(err);
        setSuccessMessage("");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-48">
      <div className="max-w-md w-full mx-auto p-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="text-white font-medium mb-2 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-white font-medium mb-2 block"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4 text-white text-center">
          Don&rsquo;t have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
