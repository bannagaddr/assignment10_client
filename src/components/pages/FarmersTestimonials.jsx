import React from "react";
import { TbStar } from "react-icons/tb";

const FarmersTestimonials = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-green-50">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
        Farmers Testimonials
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Farmer"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold text-green-800 mb-1">Rafiq</h3>
          <p className="text-sm text-gray-500 mb-2">Rajshahi</p>
          <p className="text-gray-700 mb-2">
            “KrishiLink helped me connect with local buyers and sell my crops
            directly. I saved money and got better prices!”
          </p>
          <div className="flex space-x-1 text-yellow-400">
            <TbStar /> <TbStar /> <TbStar /> <TbStar /> <TbStar />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full md:w-80">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Farmer"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold text-green-800 mb-1">Fatema</h3>
          <p className="text-sm text-gray-500 mb-2">Khulna</p>
          <p className="text-gray-700 mb-2">
            “I discovered modern farming tips through KrishiLink blogs. My yield
            increased by 20%.”
          </p>
          <div className="flex space-x-1 text-yellow-400">
            <TbStar /> <TbStar /> <TbStar /> <TbStar /> <TbStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersTestimonials;
