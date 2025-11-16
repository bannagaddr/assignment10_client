import React from "react";
import { TbInfoCircle } from "react-icons/tb";

const CropsDetails = () => {
  return (
    <div className="min-h-screen bg-green-50 px-4 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Crop"
            className="w-full h-72 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Tomato
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Category:</span> Vegetable
              </p>
              <p>
                <span className="font-semibold">Quantity:</span> 50 kg
              </p>
              <p>
                <span className="font-semibold">Price/unit:</span> $2
              </p>
              <p>
                <span className="font-semibold">Posted by:</span> Farmer John
              </p>
            </div>
            <p className="text-gray-600 mt-4">
              Fresh and organic tomatoes, grown without pesticides. Perfect for
              salads, sauces, and cooking.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-6 flex items-center gap-3">
            <TbInfoCircle className="text-green-600 text-3xl md:text-4xl" />{" "}
            Show Interest
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-medium mb-2">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-2">Message</label>
              <input
                type="text"
                placeholder="Write a message"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <p className="text-gray-700 font-medium mt-4 text-right text-lg">
            Total Price: $0
          </p>
          <button className="btn btn-success w-full mt-6 py-3 text-lg">
            Submit Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropsDetails;
