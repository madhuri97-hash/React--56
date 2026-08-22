import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [user_mobile, setMobile] = useState("");
  const [user_password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function login(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const obj = {
      user_mobile: user_mobile,
      user_password: user_password,
    };

    console.log("Login Data:", obj);

    axios
      .post("https://a2zithub.org/dairy/abi/user_login", obj)
      .then((response) => {
        console.log("Login Response:", response.data);

        if (response.data.status === "success") {
          // Save token
          localStorage.setItem("userToken", response.data.token);

          // Navigate after successful login
          navigate("/product");
        } else {
          setError("Invalid User & Password");
        }
      })
      
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your account
            </p>

            {/* Error Message */}
            {error && (
              <p className="mt-4 text-center font-bold bg-red-100 rounded-lg text-red-600 p-3">
                {error}
              </p>
            )}
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={login}>

            {/* Mobile */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                User Mobile
              </label>

              <input
                value={user_mobile}
                onChange={(e) => setMobile(e.target.value)}
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                User Password
              </label>

              <input
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-blue-500 transition"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-lg
              font-semibold text-lg transition duration-200 shadow-md
              ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Create Account */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?{" "}

              <Link
                to="/Create_account"
                className="text-blue-600 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;