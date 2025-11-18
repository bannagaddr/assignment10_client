import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AllCropPost = () => {
  const navigate = useNavigate();
  const allCropsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteCorps = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/crops/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all_crop_post");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const filteredCrops = allCropsData.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 md:px-12 py-12 bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        All Crops
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search crops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input w-full bg-white border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((data) => (
            <div
              key={data._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                <img src={data.photo} alt={data.name} />
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
                <button
                  onClick={() => handleDeleteCorps(data._id)}
                  className="btn btn-success mt-3 btn-sm w-full bg-red-600 text-white border-none shadow-none"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No crops found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCropPost;
