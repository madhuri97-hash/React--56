import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [fruits, setFruits] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    console.log("TOKEN:", token);

    // PROFILE API
    const profileObj = {
      token: token
    };

    axios
      .post(
        "https://a2zithub.org/dairy/abi/user_profile",
        profileObj
      )
      .then((response) => {
        console.log("PROFILE API RESPONSE:", response.data);

        if (
          response.data.status === "success" &&
          response.data.data
        ) {
          setProfile(response.data.data[0]);
        }
      })
      .catch((error) => {
        console.log("PROFILE API ERROR:", error);
      });

    // FRUITS API
    axios
      .get("http://localhost:5000/fruits")
      .then((response) => {
        console.log("FRUIT API RESPONSE:", response.data);

        if (response.data.fruits) {
          setFruits(response.data.fruits);
        } else {
          setFruits(response.data);
        }
      })
      .catch((error) => {
        console.log("FRUIT API ERROR:", error);
      });
  }, []);

  function logout() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fff8f2] p-4 md:p-8">
        <div className="max-w-6xl mx-auto">

          <div className="mb-6">
            <p className="text-orange-500 font-medium">
              My Account
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              Profile
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* PROFILE CARD */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

              <div className="h-32 bg-gradient-to-r from-orange-500 to-red-500"></div>

              <div className="px-6 pb-6">

                <div className="-mt-14">
                  <img
                    src="dp.jpg"
                    alt="Profile"
                    className="w-28 h-28 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  {profile.user_name}
                </h2>

                <p className="text-gray-500 text-sm">
                  {profile.user_email}
                </p>

                <div className="border-t mt-5 pt-5">

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-500">
                      📱 Mobile
                    </span>

                    <span className="font-bold text-gray-700">
                      {profile.user_mobile}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-500 mb-1">
                      📍 Address
                    </p>

                    <p className="font-semibold text-gray-700">
                      Ahilyanagar
                    </p>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-500">
                      📮 Pincode
                    </span>

                    <span className="font-bold text-gray-700">
                      414003
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2 space-y-6">

              {/* FRUITS */}
              <div className="bg-white rounded-3xl shadow-sm p-6">

                <h2 className="text-xl font-bold text-gray-800">
                  My Favorite Fruits 🍎
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Your favorite fresh fruits
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

                  {fruits.length > 0 ? (
                    fruits.map((fruit) => (
                      <div
                        key={fruit.id}
                        className="bg-orange-50 rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
                      >

                        <img
                          src={fruit.image}
                          alt={fruit.name}
                          className="w-24 h-24 object-cover rounded-full mx-auto"
                        />

                        <p className="font-semibold text-gray-800 mt-3">
                          {fruit.name}
                        </p>

                        <p className="text-green-600 font-bold mt-1">
                          ₹{fruit.price}
                        </p>

                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-8">
                      <p className="text-gray-400">
                        No fruits available
                      </p>
                    </div>
                  )}

                </div>
              </div>

              {/* RECENT ORDERS */}
              <div className="bg-white rounded-3xl shadow-sm p-6">

                <div className="flex items-center justify-between mb-5">

                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Recent Orders 🛍️
                    </h2>

                    <p className="text-gray-500 text-sm">
                      Your latest orders
                    </p>
                  </div>

                  <button className="text-orange-500 font-medium">
                    View All →
                  </button>

                </div>

                <div className="space-y-4">

                  <div className="border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-3xl">
                        🍎
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800">
                          Fresh Apple
                        </h3>

                        <p className="text-sm text-gray-500">
                          Order #FRUIT1024
                        </p>

                        <p className="text-sm text-gray-400">
                          20 Aug 2026
                        </p>
                      </div>

                    </div>

                    <div className="sm:text-right">

                      <p className="font-bold text-gray-800">
                        ₹399
                      </p>

                      <span className="inline-block mt-1 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                        Delivered
                      </span>

                    </div>

                  </div>

                  <div className="border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-3xl">
                        🍇
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800">
                          Fresh Grapes
                        </h3>

                        <p className="text-sm text-gray-500">
                          Order #FRUIT1023
                        </p>

                        <p className="text-sm text-gray-400">
                          18 Aug 2026
                        </p>
                      </div>

                    </div>

                    <div className="sm:text-right">

                      <p className="font-bold text-gray-800">
                        ₹249
                      </p>

                      <span className="inline-block mt-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                        On the way
                      </span>

                    </div>

                  </div>

                </div>
              </div>

              {/* ACCOUNT SETTINGS */}
              <div className="bg-white rounded-3xl shadow-sm p-6">

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Account Settings ⚙️
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                  <button className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition text-left">
                    <span className="text-2xl">📍</span>

                    <div>
                      <p className="font-semibold">
                        Saved Addresses
                      </p>

                      <p className="text-xs text-gray-500">
                        Manage delivery addresses
                      </p>
                    </div>
                  </button>

                  <button className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition text-left">
                    <span className="text-2xl">💳</span>

                    <div>
                      <p className="font-semibold">
                        Payment Methods
                      </p>

                      <p className="text-xs text-gray-500">
                        Manage your payments
                      </p>
                    </div>
                  </button>

                  <button className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition text-left">
                    <span className="text-2xl">🔔</span>

                    <div>
                      <p className="font-semibold">
                        Notifications
                      </p>

                      <p className="text-xs text-gray-500">
                        Notification preferences
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={logout}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-red-50 hover:bg-red-100 transition text-left"
                  >
                    <span className="text-2xl">
                      🚪
                    </span>

                    <div>
                      <p className="font-semibold text-red-600">
                        Logout
                      </p>

                      <p className="text-xs text-red-400">
                        Sign out from account
                      </p>
                    </div>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;