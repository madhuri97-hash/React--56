import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    console.log("TOKEN:", token);

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .post(
        "https://a2zithub.org/dairy/abi/order_list",
        {
          token: token,
        }
      )
      .then((response) => {
        console.log("ORDER LIST RESPONSE:", response.data);

        if (Array.isArray(response.data.order_det)) {
          setOrder(response.data.order_det);
        } else {
          setOrder([]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log("ORDER API ERROR:", error);
        setLoading(false);
      });
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fff8f2] py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <p className="text-orange-500 font-medium">
              My Account
            </p>

            <h1 className="text-3xl font-bold text-gray-800">
              My Orders 🛍️
            </h1>

            <p className="text-gray-500 mt-2">
              Track and view all your orders
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="bg-white rounded-3xl p-10 text-center">
              <p className="text-gray-500">
                Loading orders...
              </p>
            </div>
          )}

          {/* No Orders */}
          {!loading && order.length === 0 && (
            <div className="bg-white rounded-3xl shadow-sm p-12 text-center">

              <div className="text-6xl mb-5">
                🛒
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                No Orders Yet
              </h2>

              <p className="text-gray-500 mt-2 mb-6">
                You haven't placed any orders yet.
              </p>

              <button
                onClick={() => navigate("/product")}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
              >
                Start Shopping 🍎
              </button>

            </div>
          )}

          {/* Orders */}
          {!loading && order.length > 0 && (
            <div className="space-y-5">

              {order.map((item, index) => (
                <div
                  key={item.product_order_id || index}
                  className="bg-white rounded-3xl shadow-sm p-6"
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* ORDER ID */}
                    <div>
                      <p className="text-sm text-gray-500">
                        Order ID
                      </p>

                      <h2 className="font-bold text-gray-800">
                        #{item.product_order_id}
                      </h2>

                      <p className="text-sm text-gray-400 mt-1">
                        {item.city}, {item.district}
                      </p>
                    </div>

                    {/* ADDRESS */}
                    <div>
                      <p className="text-sm text-gray-500">
                        Delivery Address
                      </p>

                      <p className="font-semibold text-gray-700">
                        {item.area}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.city}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.pincode}
                      </p>
                    </div>

                    {/* PAYMENT */}
                    <div>
                      <p className="text-sm text-gray-500">
                        Payment
                      </p>

                      <p className="font-semibold text-gray-700">
                        {item.payment_type || "Cash"}
                      </p>
                    </div>

                    {/* STATUS */}
                    <div>
                      <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                        Order Placed
                      </span>
                    </div>

                    {/* DETAILS */}
                    <button
                      onClick={() =>
                        navigate(
                          `/order/${item.product_order_id}`
                        )
                      }
                      className="bg-orange-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition"
                    >
                      View Details →
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Order;