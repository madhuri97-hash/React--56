import { useEffect, useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";
import Product from "./Product";
import Product_det from "./Product_det";
import ProductCart from "../Comman/ProductCart";

function Home() {

  const [current, setCurrent] = useState(0);
  const [images,setImages] =useState([]);
  const [feature_product,setFeature_product] =useState([]);
  const [new_product,setNew_product] =useState([]);
  const [best_selling_product,setBest_selling_product] =useState([]);
  

  useEffect(() => {

   if(images.length == 0)return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((response)=>{
      // console.log("Response",response.data)
      setImages(response.data)
    })
  },[])

  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/feature_product").then((response)=>{
  // console.log("response" ,response.data)
  setFeature_product(response.data)
    })
  }, [])
  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/new_product").then((response)=>{
      // console.log("response",response.data)
      setNew_product(response.data)

  })
  } ,[])
  useEffect(()=>{
  axios.get("https://a2zithub.org/dairy/abi/best_selling_product").then((response)=>{
    console.log("response",response.data)
    setBest_selling_product(response.data)

  })
  },[])

  return (
    <>
    <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">

      <img
        src={images[current]?.slider_img}
        alt="Home"
        className="w-full h-full object-cover duration-500"
      />

    </div>


<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">Featured Products</h2>
    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {feature_product.map((val,index)=>(
  <ProductCart data={val}/>
    )

    )}

  
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">New Products</h2>
    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{new_product.map((val,index)=>(
  <ProductCart data= {val}/>
))}

  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">Best Selling Products</h2>
    <button className="text-green-600 font-semibold hover:underline">
      View All →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{best_selling_product.map((val,index)=>(
  <ProductCart data= {val}/>
))}
  </div>
</section>

    <Footer/>
    </>
  );
}

export default Home;