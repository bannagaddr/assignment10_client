import React, { use } from "react";
import { AuthContext } from "../contextapis/Context";
import "../../index.css";

const AddCrop = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      type: e.target.type.value,
      price: e.target.price.value,
      unit: e.target.unit.value,
      quantity: e.target.quantity.value,
      location: e.target.location.value,
      photo: e.target.photo.value,
      description: e.target.description.value,
      interests: [],
      owner: {
        _id: user.uid,
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };

    // formData send request to the server
    fetch("http://localhost:3000/crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Add New Crop</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Crop Name"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />

          <input
            type="number"
            name="price"
            placeholder="Price per unit"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />

          <input
            type="number"
            name="unit"
            placeholder="Unit Kg, Ton, bag"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Estimated quantity"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />

          <input
            type="text"
            name="photo"
            placeholder="Image URL"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />

          <textarea
            placeholder="Description"
            name="description"
            className="w-full border-2 border-[#9a9a9a] p-3 rounded-xl focus:ring focus:ring-[#22C55E] focus:border-[#22C55E] outline-none"
          />

          <button className="w-full bg-green-600 text-white p-3 rounded-xl text-lg hover:bg-green-700 active:scale-95 transition">
            Add Crop
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrop;
