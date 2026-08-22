import Footer from "../Comman/Footer";
import Navbar from "../Comman/Navbar";
import ProductCart from "../Comman/ProductCart";
import Product_det from "./Product_det";
import Login from "./Login";
import  Create_account from "./Create_account";
import axios from "axios";
import { useEffect, useState } from "react";

function Product(){
    const [data,setData]=useState([]);

    useEffect(()=>{
axios.get("https://a2zithub.org/dairy/abi/product_det").then((response)=>{
    console.log("response",response.data)
    setData(response.data)

})
    },[])
    return(
        <>
        <Navbar/>
        <br/>
        <br/>
        <h1 className="text-5xl font-bold text-center">product pages</h1>
        <br/><br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((val, index) => (
  <ProductCart
    key={val.id || index}
    data={val}
  />
))}
       
        
        
</div>
        <Footer/>
               </>
    )
}
export default Product;