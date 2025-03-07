'use server';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer"; // Adjust the import path

import {Context} from "../../App";
import { useContext } from "react";
import axios from "axios";
export const Login = () => {
    const navigate = useNavigate();
    const [profile , setProfile] = useContext(Context);
    const [loginData, setLoginData] = useState({
        Email: "",
        Password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target; // Use 'name' instead of 'email'
        setLoginData({
            ...loginData,
            [name]: value, // Update the correct field dynamically
        });
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/users/login", loginData);
            if (res.status === 200) {
                
                setProfile(res.data);
                
                navigate("/"); // Redirect to the home page
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid name or password");
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
          
            <div className="hero bg-base-200 flex-grow flex items-center justify-center mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                        <p className="py-6">
                            E-Shopping offers a seamless online shopping experience, featuring a
                            wide variety of products at competitive prices, all from the comfort
                            of your home.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    value={loginData.Email}
                                    onChange={handleChange}
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
                                    value={loginData.Password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {error && (
                                <div className="text-red-500 text-sm my-2">{error}</div>
                            )}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">
                                    Login
                                </button>
                            </div>
                            <label className="label">
                                <div className="flex justify-center items-center w-full">
                                    <a
                                        
                                        className="label-text-alt link link-hover"
                                        onClick={() => navigate("/signup")}
                                    >
                                        Create account?
                                    </a>
                                </div>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
