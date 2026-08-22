import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState({});
  const [fruits, setFruits] = useState([]);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    console.log("TOKEN:", token);

    // =========================
    // LOGIN CHECK
    // =========================
    if (!token) {
      navigate("/login");
      return;
    }

    // =========================
    // PROFILE API
    // =========================
    axios
      .post(
        "https://a2zithub.org/dairy/abi/user_profile",
        {
          token: token,
        }
      )
      .then((response) => {
        console.log(
          "PROFILE API RESPONSE:",
          response.data
        );

        if (
          response.data.status === "success" &&
          Array.isArray(response.data.data)
        ) {
          setProfile(response.data.data[0] || {});
        } else {
          setProfile({});
        }
      })
      .catch((error) => {
        console.log(
          "PROFILE API ERROR:",
          error
        );
      });

    // =========================
    // PRODUCTS / FRUITS API
    // =========================
    axios
      .get(
        "https://a2zithub.org/dairy/abi/product_det"
      )
      .then((response) => {
        console.log(
          "PRODUCT API RESPONSE:",
          response.data
        );

        if (
          response.data.status === "success" &&
          Array.isArray(response.data.data)
        ) {
          setFruits(response.data.data);
        } else {
          setFruits([]);
        }
      })
      .catch((error) => {
        console.log(
          "PRODUCT API ERROR:",
          error
        );

        setFruits([]);
      });

    // =========================
    // ORDERS API
    // =========================
    axios
      .post(
        "https://a2zithub.org/dairy/abi/order_list",
        {
          token: token,
        }
      )
      .then((response) => {
        console.log(
          "PROFILE ORDER RESPONSE:",
          response.data
        );

        if (
          Array.isArray(response.data.order_det)
        ) {
          setOrders(response.data.order_det);
        } else {
          setOrders([]);
        }
      })
      .catch((error) => {
        console.log(
          "PROFILE ORDER API ERROR:",
          error
        );

        setOrders([]);
      });
  }, [navigate]);
  const getInitials = () => {
  const name = profile.user_name?.trim();

  if (!name) return "U";

  const words = name.split(" ").filter(Boolean);

  if (words.length >= 2) {
    return (
      words[0].charAt(0) +
      words[1].charAt(0)
    ).toUpperCase();
  }

  return name.charAt(0).toUpperCase();
};

  
  function logout() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fff8f2] p-4 md:p-8">
        <div className="max-w-6xl mx-auto">

          {/* =========================
              PAGE HEADER
          ========================= */}
          <div className="mb-6">
            <p className="text-orange-500 font-medium">
              My Account
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              Profile
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* =========================
                PROFILE CARD
            ========================= */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

              {/* Cover */}
              <div className="h-32 bg-gradient-to-r from-orange-500 to-red-500"></div>

              <div className="px-6 pb-6">

                {/* Profile Image */}
               <div className="-mt-14">
  {profile.user_image ? (
    <img
      src={profile.user_image}
      alt={profile.user_name || "Profile"}
      className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
    />
  ) : (
    <div className="w-25 h-25 rounded-full border-4 border-white shadow-md bg-purple-600 text-white flex items-center justify-center text-3xl font-bold uppercase">
      {getInitials()}
    </div>
  )}
</div>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  {profile.user_name || "User"}
                </h2>

                {/* Email */}
                <p className="text-gray-500 text-sm">
                  {profile.user_email || "Email not available"}
                </p>

                <div className="border-t mt-5 pt-5">

                  {/* Mobile */}
                  <div className="flex justify-between mb-4 gap-4">
                    <span className="text-gray-500">
                      📱 Mobile
                    </span>

                    <span className="font-bold text-gray-700">
                      {profile.user_mobile || "-"}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <p className="text-gray-500 mb-1">
                      📍 Address
                    </p>

                    <p className="font-semibold text-gray-700">
                      Ahilyanagar
                    </p>
                  </div>

                  {/* Pincode */}
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

            {/* =========================
                RIGHT SIDE
            ========================= */}
            <div className="lg:col-span-2 space-y-6">

              {/* =========================
                  FRUITS
              ========================= */}
              <div className="bg-white rounded-3xl shadow-sm p-6">

                <h2 className="text-xl font-bold text-gray-800">
                  My Favorite Fruits 🍎
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Your favorite fresh fruits
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

                  {fruits.length > 0 ? (

                    fruits.slice(0, 8).map((fruit, index) => (

                      <div
                        key={
                          fruit.product_id ||
                          fruit.id ||
                          index
                        }
                        className="bg-orange-50 rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300"
                      >

                        {/* Product Image */}
                        <img
                          src={
                            fruit.image ||
                            fruit.product_image ||
                            "https://via.placeholder.com/150"
                          }
                          alt={
                            fruit.name ||
                            fruit.product_name ||
                            "Fruit"
                          }
                          className="w-24 h-24 object-cover rounded-full mx-auto"
                        />

                        {/* Product Name */}
                        <p className="font-semibold text-gray-800 mt-3">
                          {fruit.name ||
                            fruit.product_name ||
                            "Fruit"}
                        </p>

                        {/* Product Price */}
                        <p className="text-green-600 font-bold mt-1">
                          ₹
                          {fruit.price ||
                            fruit.product_price ||
                            0}
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

              {/* =========================
                  RECENT ORDERS
              ========================= */}
              <div className="bg-white rounded-3xl shadow-sm p-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">

                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      Recent Orders 🛍️
                    </h2>

                    <p className="text-gray-500 text-sm">
                      Your latest orders
                    </p>
                  </div>

                  {/* VIEW ALL */}
                  <button
                    onClick={() => navigate("/order")}
                    className="text-orange-500 font-medium hover:text-orange-600 transition"
                  >
                    View All →
                  </button>

                </div>

                {/* Orders */}
                <div className="space-y-4">

                  {orders.length > 0 ? (

                    orders
                      .slice(0, 3)
                      .map((item, index) => (

                        <div
                          key={
                            item.product_order_id ||
                            index
                          }
                          className="border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >

                          {/* LEFT */}
                          <div className="flex items-center gap-4">

                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-3xl">
                              🍎
                            </div>

                            <div>

                              <h3 className="font-bold text-gray-800">
                                Order #
                                {item.product_order_id}
                              </h3>

                              <p className="text-sm text-gray-500">
                                {item.area ||
                                  "Delivery Address"}
                              </p>

                              <p className="text-sm text-gray-400">
                                {item.city || "-"}
                                {item.district
                                  ? `, ${item.district}`
                                  : ""}
                              </p>

                            </div>

                          </div>

                          {/* RIGHT */}
                          <div className="sm:text-right">

                            <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                              Order Placed
                            </span>

                            <br />

                            <button
                              onClick={() =>
                                navigate(
                                  `/order/${item.product_order_id}`
                                )
                              }
                              className="text-orange-500 text-sm font-semibold mt-2 hover:text-orange-600"
                            >
                              View Details →
                            </button>

                          </div>

                        </div>

                      ))

                  ) : (

                    <div className="text-center py-8">

                      <div className="text-5xl mb-3">
                        🛒
                      </div>

                      <p className="text-gray-400">
                        No orders available
                      </p>

                    </div>

                  )}

                </div>
              </div>

              {/* =========================
                  ACCOUNT SETTINGS
              ========================= */}
              <div className="bg-white rounded-3xl shadow-sm p-6">

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Account Settings ⚙️
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                  {/* Saved Addresses */}
                  <button
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition text-left"
                  >
                    <span className="text-2xl">
                      📍
                    </span>

                    <div>
                      <p className="font-semibold">
                        Saved Addresses
                      </p>

                      <p className="text-xs text-gray-500">
                        Manage delivery addresses
                      </p>
                    </div>
                  </button>

                  {/* Payment */}
                  <button
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition text-left"
                  >
                    <span className="text-2xl">
                      💳
                    </span>

                    <div>
                      <p className="font-semibold">
                        Payment Methods
                      </p>

                      <p className="text-xs text-gray-500">
                        Manage your payments
                      </p>
                    </div>
                  </button>

                  {/* Notifications */}
                  <button
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-orange-50 transition text-left"
                  >
                    <span className="text-2xl">
                      🔔
                    </span>

                    <div>
                      <p className="font-semibold">
                        Notifications
                      </p>

                      <p className="text-xs text-gray-500">
                        Notification preferences
                      </p>
                    </div>
                  </button>

                  {/* Logout */}
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
}

export default Profile;