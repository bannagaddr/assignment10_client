import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestCropPost = () => {
  const [latestCropsData, setLatestCropsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/crops")
      .then((res) => res.json())
      .then((data) => setLatestCropsData(data.slice(0, 6)));
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-[#DBFCE7]">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Latest Crops
      </h1>

      {/* crops card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestCropsData.map((data) => (
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
                className="btn btn-success btn-sm w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCropPost;
