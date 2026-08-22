
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiTimeFill,
  RiSendPlaneFill,
} from "@remixicon/react";

import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.phone.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    toast.error("Please fill all the fields!");
    return;
  }

  toast.success("Message sent successfully! 🍎");

  setFormData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
};

  // Google Maps
  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Maharashtra,India",
      "_blank"
    );
  };

  return (
    <>
    <Toaster position="top-right" />

      <Navbar />

      <div className="min-h-screen bg-gray-50">

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">

            <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm font-medium mb-5">
              🍎 We're Here For You
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
              Contact Us
            </h1>

            <p className="text-green-50 text-lg max-w-2xl mx-auto leading-8">
              Have a question about our fresh fruits, delivery or your order?
              Feel free to get in touch with the FreshMart team.
            </p>

          </div>
        </section>


        {/* ================= CONTACT CARDS ================= */}
        <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <RiMapPin2Fill size={28} />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Our Address
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                FreshMart Fruit Store,
                <br />
                Maharashtra, India
              </p>

            </div>


            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <RiPhoneFill size={28} />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Call Us
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                +91 98765 43210
                <br />
                +91 91234 56789
              </p>

            </div>


            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <RiMailFill size={28} />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Email Us
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                support@freshmart.com
                <br />
                hello@freshmart.com
              </p>

            </div>


            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-7 text-center hover:-translate-y-2 transition duration-300">

              <div className="w-14 h-14 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <RiTimeFill size={28} />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Opening Hours
              </h3>

              <p className="text-gray-500 text-sm leading-6">
                Mon - Sun
                <br />
                10:00 AM - 10:00 PM
              </p>

            </div>

          </div>

        </section>


        {/* ================= MAIN CONTACT SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ================= LEFT SIDE ================= */}
            <div>

              <span className="text-green-600 font-bold uppercase tracking-wider">
                Get In Touch
              </span>

              <h2 className="text-4xl font-extrabold text-gray-800 mt-3 mb-5">
                We'd Love To
                <span className="text-green-600">
                  {" "}Hear From You!
                </span>
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Whether you have a question about our fresh fruits,
                delivery, orders or anything else, our team is ready to help you.
              </p>


              {/* Phone Info */}
              <div className="space-y-5">

                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">

                  <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                    <RiPhoneFill size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Phone
                    </h3>

                    <p className="text-gray-500">
                      +91 98765 43210
                    </p>
                  </div>

                </div>


                {/* Email Info */}
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">

                  <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                    <RiMailFill size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Email
                    </h3>

                    <p className="text-gray-500">
                      support@freshmart.com
                    </p>
                  </div>

                </div>


                {/* Location Info */}
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">

                  <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                    <RiMapPin2Fill size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Location
                    </h3>

                    <p className="text-gray-500">
                      Maharashtra, India
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= CONTACT FORM ================= */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Send Us a Message
              </h2>

              <p className="text-gray-500 mb-7">
                Have a question about our fresh fruits? Send us a message.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Phone */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Subject */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  />

                </div>


                {/* Message */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                  ></textarea>

                </div>


                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 hover:shadow-lg transition duration-300"
                >
                  <RiSendPlaneFill size={20} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>


        {/* ================= LOCATION SECTION ================= */}
        <section className="px-6 pb-20">

          <div className="max-w-7xl mx-auto">

            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-10 md:p-14 text-white text-center shadow-xl">

              <div className="flex justify-center mb-5">

                <div className="bg-white/20 p-4 rounded-full">
                  <RiMapPin2Fill size={38} />
                </div>

              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Visit FreshMart
              </h2>

              <p className="text-green-50 max-w-xl mx-auto leading-7 mb-7">
                Visit us and explore our collection of fresh, healthy
                and naturally delicious fruits.
              </p>

              <button
                onClick={handleDirections}
                className="bg-white text-green-600 px-7 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-green-800 transition duration-300"
              >
                Get Directions 📍
              </button>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default Contact;

