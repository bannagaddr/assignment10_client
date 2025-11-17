import React from "react";
import { Link, useLoaderData } from "react-router";

const AllCropPost = () => {
  const allCropsData = useLoaderData();

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        All Crops
      </h1>

      {/* search bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search crops..."
          className="input w-full bg-white border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
        />
      </div>

      {/* crops card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allCropsData.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
              <img src={data.photo} alt="" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-green-800 mb-1">
                {data.name}
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Quantity: {data.quantity} kg
              </p>
              <p className="text-sm text-gray-700 mb-3">
                Price per unit: ${data.price}
              </p>
              <Link
                to={`/crops-details/${data._id}`}
                className="btn btn-success btn-sm w-full shadow-none"
              >
                View Details
              </Link>
              <button className="btn btn-success mt-3 btn-sm w-full bg-red-600 text-white border-none shadow-none">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCropPost;
