import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
 import axios from "axios";
 import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [data,setData] =useState([]);

  const [subtotal,setTotal]=useState(0);
  var obj ={
    "token":localStorage.getItem("userToken")
  }
 useEffect(()=>{
  axios.post("https://a2zithub.org/dairy/abi/cart_list",obj).then((response) => {

  console.log("Cart Response:", response.data);

  if (Array.isArray(response.data)) {

    setData(response.data);

    let sum = 0;

    for (let i = 0; i < response.data.length; i++) {
      sum =
        sum +
        Number(response.data[i].price) *
        Number(response.data[i].qty);
    }

    setTotal(sum);

  } else {

    setData([]);
    setTotal(0);

   }
  })
}, [remove]);
 function remove(product_econ_cart_id){
  var obj={
    "product_econ_cart_id":product_econ_cart_id,
    "token":localStorage.getItem("userToken")
  }
 axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty",obj).then((response)=>{
  // console.log("response",response)
   toast.success("Product removed from cart!");

 })
 }
 function qty_inc(product_econ_cart_id){
  var obj={
    "product_econ_cart_id":product_econ_cart_id,
    "token":localStorage.getItem("userToken")

  }
  axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty",obj).then((response)=>{
    // console.log("response",response)
    toast.success("Quantity increased!");
  })
 }
 function qty_dec(product_econ_cart_id){
  var obj={
    "product_econ_cart_id":product_econ_cart_id,
    "token":localStorage.getItem("userToken")

  }
  axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty",obj).then((response)=>{
    // console.log("response",response)
    toast.success("Quantity decreased!");

  })
 }
 

  
  
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Cart Page
        </h1>

        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <table className="w-full">
              <thead>
                <tr className="bg-gray-500 text-white">
                  <th className="p-4 text-center">Sr.no</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-center">Image</th>
                  <th className="p-4 text-center">QTY</th>
                  <th className="p-4 text-center">Price</th>
                  <th className="p-4 text-center">Total</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((val,index)=>(
                  
                  <tr
    key={index}
    className="border-b hover:bg-gray-50"
  >

                  <td className="p-4 text-center">
        {index + 1}
      </td>

                  <td className="p-4 font-semibold text-gray-700">
                   {val.product_name}
                  </td>

                  <td className="p-4 text-center">
                    <img
                     src={val.product_img}
                      alt="Milk"
                      className="w-20 h-20 object-cover rounded-lg mx-auto"
                    />
                  </td>

                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center gap-3">
                     <button  onClick={()=>qty_dec(val.product_econ_cart_id)}
                      className="bg-gray-600 hover:bg-gray-700 text-white w-8 h-8 rounded">

                        -
                      </button>

                      <span className="font-semibold">
                        {val.qty}
                      </span>

                      <button  
                      onClick={()=>qty_inc(val.product_econ_cart_id)}
                      className="bg-gray-600 hover:bg-gray-700 text-white w-8 h-8 rounded">
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-4 text-center font-medium">
                    ₹{val.price}
                  </td>

                  <td className="p-4 text-center font-bold text-blue-600">
                    ₹{val.qty * val.price}
                  </td>

                  <td className="p-4 text-center">
                    <button
                    onClick={()=>remove(val.product_econ_cart_id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                   &#10005;
                    </button>
                  </td>

                </tr>
                 
                )
                )}
                
              </tbody>
            </table>

          </div>
            <div className="border-t bg-gray-50 p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                  <h2 className="text-gray-500 text-lg">
                    Grand Total: ₹{subtotal}
                  </h2>

                  

               <Link
  to="/Checkout"
  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
>
  Proceed to Checkout →
</Link>

              </div>
            </div>

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
      /> 
    </>
  );
}

export default Cart;