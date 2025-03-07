import React, { useContext } from "react";
import { Context } from "../../../App";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Settings = () => {
  const [profile, setProfile] = useContext(Context);
  const navigate = useNavigate();
  const handleImage = (profile) => {
    if (profile) {
      console.log(profile);
      return `/${profile.user.id}.jpg`;
    }
    return "/nothing.webp";
  };
  return (
    <div className="container lg:pt-28 p-6 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Profile Section */}
        <div className="col-span-1 ">
          <div className="bg-white border border-gray-200 shadow rounded-lg p-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border border-gray-300 mb-4">
                <img
                  src={handleImage(profile)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-xl font-bold mb-1">
                {profile.user.FirstName} {profile.user.LastName}
              </h5>
              <p className="text-sm text-gray-600">{profile.user.Email}</p>
            </div>
            <div className="mt-6">
              <h5 className="text-lg font-bold mb-2">About</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                I'm Yuki, a Full Stack Designer. I enjoy creating user-centric,
                delightful, and human experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-1 lg:col-span-3">
          <div className="bg-white border border-gray-200 shadow rounded-lg p-6">
            {/* Personal Details */}
            <div>
              <h6 className="text-lg font-bold text-blue-600 mb-4">
                Personal Details
              </h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={
                      profile
                        ? profile.user.FirstName + " " + profile.user.LastName
                        : ""
                    }
                    placeholder="Enter full name"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="eMail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile ? profile.user.Email : ""}
                    id="eMail"
                    placeholder="Enter email ID"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    value={profile ? profile.user.Phone : ""}
                    id="phone"
                    placeholder="Enter phone number"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sexe
                  </label>
                  <select className="select select-bordered w-full bg-white max-w-xs">
                    <option className="cursor-pointer"disabled hidden selected>
                      Select Sexe
                    </option>
                    <option className="cursor-pointer">Male</option>
                    <option className="cursor-pointer">Female</option>
                    <option className="cursor-pointer">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

      
            <div className="mt-6">
              <h6 className="text-lg font-bold text-blue-600 mb-4">Address</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    type="text"
                    id="Street"
                    placeholder="Enter Street"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ciTy"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="ciTy"
                    placeholder="Enter City"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sTate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="sTate"
                    placeholder="Enter State"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zIp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zIp"
                    placeholder="Zip Code"
                    className="mt-1 block w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition" onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
