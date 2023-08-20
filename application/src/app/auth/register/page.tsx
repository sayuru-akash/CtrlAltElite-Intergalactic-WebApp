"use client";
import { useState } from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const userCookie = getCookie("user");

  const router = useRouter();

  if (userCookie) {
    router.push("/account");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Basic form validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    const data = {
      fname: firstName,
      lname: lastName,
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        const json = await res.json();
        if (json.id) {
          setSuccessMessage("User registered successfully.");
          // clear form
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else {
          setErrorMessage("User already exists or something went wrong.");
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
        <h2 className="text-2xl font-semibold text-white mb-6">Register</h2>
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="text-white font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="text-white font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="text-white font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-white text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 cursor-pointer">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
