import { Link } from "react-router-dom";

function ProductCart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={data.product_img}
        alt={data.product_name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-lg font-bold mt-2">
        ₹{data.price}
      </h2>

      <h3 className="text-base font-semibold text-gray-800">
        {data.product_name}
      </h3>

      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        {data.details}
      </p>

      <Link to={`/product_det/${data.product_tbl_id}`}>
        <div className="w-full mt-3 bg-green-500 text-white text-sm py-2 text-center rounded-lg hover:bg-green-600 cursor-pointer">
          View Product
        </div>
      </Link>
    </div>
  );
}

export default ProductCart;