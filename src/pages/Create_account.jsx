import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create_account() {
  const navigate = useNavigate();

  const [user_name, setName] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  function create_account(e) {
    e.preventDefault();

    const obj = {
      "user_name": user_name,
       "user_mobile": user_mobile,
      "user_email": user_email,
      "user_password": user_password,
    };

    axios
      .post("https://a2zithub.org/dairy/abi/user_register", obj)
      .then((response) => {
        console.log("response", response);
        toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      });
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-16">
        <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">

          <h1 className="mb-2 text-center text-4xl font-bold">
            Create Account
          </h1>

          <p className="mb-8 text-center text-sm text-gray-400">
            Create your new account
          </p>

          <form className="space-y-5" onSubmit={create_account}>

            {/* User Name */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block font-medium text-gray-700"
              >
                User Name
              </label>

              <input
                value={user_name}
                onChange={(e) => setName(e.target.value)}
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 block font-medium text-gray-700"
              >
                Mobile Number
              </label>

              <input
                value={user_mobile}
                onChange={(e) => setMobile(e.target.value)}
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Email
              </label>

              <input
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block font-medium text-gray-700"
              >
                Password
              </label>

              <input
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

            {/* Login */}
            <p className="mt-5 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-medium text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>

          </form>
        </div>
      </div>

      <Footer />
      <Footer />

<ToastContainer
  position="top-center"
  autoClose={2000}
  hideProgressBar
  newestOnTop
  closeOnClick
  pauseOnHover
  toastClassName="!bg-gradient-to-r !from-green-500 !to-emerald-600 !text-white !rounded-2xl !shadow-2xl !font-semibold !px-5 !py-3"
  bodyClassName="!text-white !text-base"
/>
    </>
  );
}

export default Create_account;