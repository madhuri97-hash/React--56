import { Link } from "react-router-dom";
import {RiShoppingCartFill, RiAccountCircleFill ,RiLoginCircleFill ,RiUserAddFill} from "@remixicon/react"

function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-md px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-green-600 cursor-pointer">
              FreshMart
            </h2>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>

             <Link to="/about" className="hover:text-green-600 transition">
            About
          </Link>

            <Link to="/product" className="hover:text-green-600 transition">
              Product
            </Link>

            <Link to="/contact" className="hover:text-green-600 transition">
            Contact
          </Link>
          </div>
       {localStorage.getItem("userToken") ?
       <div className="flex items-center gap-6">
<Link to="/cart">
            <button className="text-x font-bold bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-500">
             <RiShoppingCartFill/>
            </button>
            </Link>
<Link to="/profile">
  <button className="bg-blue-700 text-white px-4 py-2 rounded">
   <RiAccountCircleFill />
  </button>
</Link>
          </div>
         : <div className="flex items-center gap-6">
<Link to="/login">
            <button className=" text-x font-bold bg-blue-700  text-white px-4 py-1 rounded hover:bg-blue-500">
             <RiLoginCircleFill />
            </button>
            </Link>
<Link to="/Create_account">
            <button className=" text-x font-bold bg-blue-700  text-white px-4 py-1 rounded hover:bg-blue-500">
             <RiUserAddFill />
             
            </button>
</Link>
          </div>
         }

          {/* Right Side */}
          

        </div>
      </nav>
    </>
  );
}

export default Navbar;