import { useNavigate } from "react-router-dom";

import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";

function About() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-5">
                🍎 Fresh • Healthy • Natural
              </span>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                Fresh Fruits,
                <br />
                <span className="text-yellow-300">
                  Fresh Life!
                </span>
              </h1>

              <p className="text-green-50 text-lg leading-8 mb-8">
                Welcome to FreshMart, your trusted destination for fresh
                and delicious fruits. We bring naturally fresh, healthy
                and quality fruits right to your doorstep with love and care.
              </p>

              <button onClick={() => navigate("/product")}>
  Explore Fruits →
</button>
            </div>

            {/* Fruit Image */}
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-md p-5 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Fruits"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
                />
              </div>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=80"
                alt="Fresh Fruits Basket"
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>

            <div>
              <span className="text-green-600 font-bold uppercase tracking-wider">
                About FreshMart
              </span>

              <h2 className="text-4xl font-extrabold text-gray-800 mt-3 mb-6">
                We Make Your
                <span className="text-green-600">
                  {" "}Healthy Journey{" "}
                </span>
                Better
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                FreshMart is created with one simple goal — to make fresh,
                tasty and nutritious fruits easily accessible to everyone.
              </p>

              <p className="text-gray-600 leading-8 mb-8">
                From selecting the best fruits to carefully packing and
                delivering them, we focus on freshness and quality at every step.
              </p>

              <div className="grid grid-cols-2 gap-5">

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    100%
                  </h3>
                  <p className="text-gray-500">
                    Fresh Fruits
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    24/7
                  </h3>
                  <p className="text-gray-500">
                    Customer Support
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">
              <span className="text-green-600 font-bold uppercase tracking-wider">
                Why FreshMart?
              </span>

              <h2 className="text-4xl font-extrabold text-gray-800 mt-3">
                Why Choose Us?
              </h2>

              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                We are committed to providing fresh fruits, easy ordering
                and an amazing shopping experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">

                <div className="w-16 h-16 mx-auto bg-green-100 text-3xl rounded-2xl flex items-center justify-center mb-5">
                  🍎
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fresh Fruits
                </h3>

                <p className="text-gray-500 leading-7">
                  Hand-picked fresh fruits selected for the best taste and quality.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">

                <div className="w-16 h-16 mx-auto bg-orange-100 text-3xl rounded-2xl flex items-center justify-center mb-5">
                  🚚
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Fast Delivery
                </h3>

                <p className="text-gray-500 leading-7">
                  Get your favorite fresh fruits delivered quickly to your doorstep.
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">

                <div className="w-16 h-16 mx-auto bg-yellow-100 text-3xl rounded-2xl flex items-center justify-center mb-5">
                  ❤️
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Naturally Healthy
                </h3>

                <p className="text-gray-500 leading-7">
                  Enjoy nutritious fruits that support a healthy and active lifestyle.
                </p>

              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 text-center">

                <div className="w-16 h-16 mx-auto bg-blue-100 text-3xl rounded-2xl flex items-center justify-center mb-5">
                  ⭐
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Best Quality
                </h3>

                <p className="text-gray-500 leading-7">
                  Quality, freshness and customer satisfaction are always our priority.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-600 text-white py-16">

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-4xl font-extrabold">
                10K+
              </h2>
              <p className="text-green-100 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">
                100+
              </h2>
              <p className="text-green-100 mt-2">
                Fresh Fruits
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">
                20+
              </h2>
              <p className="text-green-100 mt-2">
                Fruit Categories
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold">
                4.9 ⭐
              </h2>
              <p className="text-green-100 mt-2">
                Customer Rating
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">

          <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-extrabold mb-5">
              Ready for Fresh & Healthy Fruits?
            </h2>

            <p className="text-green-50 text-lg mb-8">
              Explore our fresh fruit collection and choose your favorites today.
            </p>

            <button
  onClick={() => navigate("/product")}
  className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-green-800 transition duration-300 shadow-lg"
>
  Shop Fresh Fruits 🍎
</button>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;

