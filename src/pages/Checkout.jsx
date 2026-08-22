import React, { useEffect, useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("India");
  const [payment_type, setPayement_type] = useState("Cash On");
  const [loading, setLoading] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const obj = { token: localStorage.getItem("userToken") };

    axios
      .post("https://a2zithub.org/dairy/abi/cart_list", obj)
      .then((res) => {
        console.log("response", res.data);

        if (Array.isArray(res.data)) {
          setInfo(res.data);
        }
      })
      .catch((err) => {
        console.error("Cart fetch error:", err);
      });
  }, []);

  const grandTotal = info.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  function placeorder(e) {
    e.preventDefault();
    setLoading(true);

    const obj = {
      area,
      city,
      district,
      state,
      pincode,
      country,
      payment_type,
      token: localStorage.getItem("userToken"),
    };

    console.log("Order Payload:", obj);

    axios
      .post("https://a2zithub.org/dairy/abi/place_order", obj)
      .then((res) => {
        console.log("Order Response:", res.data);

        setOrderResponse(res.data);

        toast.success("Your order is placed successfully! 🎉", {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/product");
        }, 3000);
      })
      .catch((err) => {
        console.error("Order error:", err);

        toast.error("Failed to place order. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7">
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Shipping Address
              </h2>

              <form className="space-y-5" onSubmit={placeorder}>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Street / Area Address
                  </label>

                  <input
                    type="text"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 123 Main Street, Apt 4B"
                    className="w-full px-4 py-2.5 bg-blue-50/50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      City
                    </label>

                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Springfield"
                      className="w-full px-4 py-2.5 bg-blue-50/50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      District
                    </label>

                    <input
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="e.g. Central District"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      State / Province
                    </label>

                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="e.g. California"
                      className="w-full px-4 py-2.5 bg-blue-50/50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Postal / PIN Code
                    </label>

                    <input
                      type="text"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="e.g. 90210"
                      className="w-full px-4 py-2.5 bg-blue-50/50 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Country
                  </label>

                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Payment type
                  </label>

                  <select
                    value={payment_type}
                    onChange={(e) => setPayement_type(e.target.value)}
                    className="w-full px-4 py-2.5 bg-blue-50/50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                    required
                  >
                    <option value="Cash On">Cash On</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-600/20 transition cursor-pointer disabled:opacity-60"
                >
                  {loading ? "Placing Order..." : "Place Order →"}
                </button>

              </form>
            </section>
          </div>

          <aside className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm sticky top-6 space-y-5">

              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">

                {info.length === 0 ? (
                  <p className="text-sm text-slate-400 py-2">
                    No items in cart
                  </p>
                ) : (
                  info.map((item, index) => (
                    <div
                      key={item.product_econ_cart_id || index}
                      className="flex items-center justify-between gap-3 py-1"
                    >

                      <div className="flex items-center gap-3">

                        <img
                          src={item.product_img}
                          alt={item.product_name}
                          className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-sm flex-shrink-0"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/50x50?text=Img";
                          }}
                        />

                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 leading-tight">
                            {item.product_name}
                          </h4>

                          <p className="text-xs text-slate-500 mt-0.5">
                            Qty: {item.qty}
                          </p>
                        </div>

                      </div>

                      <span className="text-sm font-semibold text-slate-800">
                        ₹ {Number(item.price) * Number(item.qty || 1)}
                      </span>

                    </div>
                  ))
                )}

              </div>

              <hr className="my-5 border-slate-300" />

              <div className="flex justify-between items-center text-base font-bold text-slate-900 pt-1">
                <span>Total</span>
                <span>₹ {grandTotal}</span>
              </div>

            </div>
          </aside>

        </div>
      </main>

      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />

    </div>
  );
}

export default Checkout;