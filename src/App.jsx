import Home from "./pages/Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Product_det from "./pages/Product_det"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Create_account from "./pages/Create_account"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"


function App() {

  return (
    <BrowserRouter>

    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/product" element={<Product/>}/>
  <Route path="/product_det/:product_id" element={<Product_det />} />
     <Route path="/login" element={<Login/>}/>
  <Route path="/Create_account" element={<Create_account />} />
  <Route path="/cart" element={<Cart/>}/>
 <Route path="/profile" element={<Profile />} />
  <Route path="/Checkout" element={<Checkout/>}/>
     </Routes>

    </BrowserRouter>
  )
}

export default App
