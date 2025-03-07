import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";

import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const [formaData, setFormaData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormaData({
      ...formaData,
      [name]: value,
    });
  };

  // Handle form submission
  const handlesubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(""); // Clear previous errors
    setIsLoading(true);

    try {
      // Make a POST request to the signup endpoint
      const res = await axios.post("http://localhost:5000/api/users/signup", formaData);

      console.log("Response:", res.data);

      // Reset form and navigate on success
      setFormaData({ FirstName: "", LastName: "", Email: "", Password: "" });
      navigate("/Login");
    } catch (err) {
      console.error("Error during signup:", err);

      // Handle error response
      const backendMessage = err.response?.data?.message || "Signup failed, please try again.";
      if (backendMessage === "Email already in use") {
        setErrorMessage("This email is already registered. Please use a different email.");
      } else {
        setErrorMessage(backendMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      <div className="hero bg-base-200 flex-grow flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse mt-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              E-Shopping offers a seamless online shopping experience, featuring
              a wide variety of products.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handlesubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="First name"
                  className="input input-bordered"
                  onChange={handlechange}
                  value={formaData.FirstName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Last name"
                  className="input input-bordered"
                  onChange={handlechange}
                  value={formaData.LastName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="input input-bordered"
                  onChange={handlechange}
                  value={formaData.Email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className="input input-bordered"
                  onChange={handlechange}
                  value={formaData.Password}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isLoading}
                  onClick={()=>handlesubmit}
                >
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
              <label className="label">
                <div className="flex justify-center items-center w-full">
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                    onClick={() => navigate("/Login")}
                  >
                    Already have an account?
                  </a>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="alert alert-error mt-4">
          <span>{errorMessage}</span>
        </div>
      )}
      <Footer />
    </div>
  );
};
