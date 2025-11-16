import React from "react";

const AddCrop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Submit Your Interest
        </h2>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Message</label>
          <input
            type="text"
            placeholder="Enter message"
            className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-1">Total Price</label>
          <input
            type="text"
            placeholder="Auto-calculated"
            disabled
            className="w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-100"
          />
        </div>

        <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transition">
          Submit Interest
        </button>

        <div className="hidden md:block mt-6">
          <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-3">
              Confirm Submission
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Are you sure you want to submit your interest?
            </p>
            <div className="flex gap-3">
              <button className="w-full py-2 bg-gray-300 text-black rounded-xl font-medium hover:bg-gray-400 transition">
                Cancel
              </button>
              <button className="w-full py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCrop;
