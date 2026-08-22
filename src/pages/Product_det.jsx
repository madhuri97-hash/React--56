import React, { useEffect, useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product_det() {

  const { product_id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState({});

  const obj = {
    product_id: product_id,
    token: localStorage.getItem("userToken"),
  };

  
  useEffect(() => {

    axios
      .post(
        "https://a2zithub.org/dairy/abi/product_by_id",
        obj
      )
      .then((response) => {

        console.log("product Details", response.data);

        setData(response.data);

      });

  }, [product_id]);


 
  function checklogin() {

    if (!localStorage.getItem("userToken")) {

      console.log("user not login");
        toast.error("Please login first!");
      setTimeout(() => {
      navigate("/login");
    }, 2000);


      return false;
    }

    return true;
  }


  
  function addtocart() {

    
    if (!checklogin()) {
      return;
    }

    
    axios
      .post(
        "https://a2zithub.org/dairy/abi/addtocart",
        obj
      )
      .then((response) => {

        console.log("response", response);
        toast.success("Product added to cart!");
         setTimeout(() => {
        navigate("/cart");
      }, 2000);
    });
}


  

  return (
    <>
      <Navbar />

      <h1 className="text-5xl font-bold text-center my-8">
        Product Details {product_id}
      </h1>

      <div className="max-w-6xl mx-auto w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10">

        {/* Product Image */}
        <div className="bg-gray-100 flex items-center justify-center p-8">
          <img
            src={data.product_img}
            alt={data.product_name}
            className="w-full max-w-md h-[450px] object-cover rounded-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <span className="text-sm font-semibold tracking-[3px] text-gray-500 uppercase">
            Fresh Fruits
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            {data.product_name}
          </h1>

          <h2 className="text-3xl font-bold text-red-500 mt-5">
            ₹{data.price}
          </h2>

          <p className="text-gray-600 text-lg leading-7 mt-6">
            {data.details}
          </p>
{data.cart == "Yes" ? 
<Link to ="/cart">
 <button 
 className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700">Go TO Cart
 </button></Link>
 :
 <button></button>}
 {data.cart == "No" ? 

 <button
  onClick={()=>(
    addtocart())}
  className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
>
  Add To Cart
</button>
 :
 <button> </button>}
         
         

        </div>
      </div>

      <Footer />
          <ToastContainer
  position="top-center"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
/> </>
  );
}

export default Product_det;