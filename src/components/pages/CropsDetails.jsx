import { useLoaderData } from "react-router";
import InterestForm from "./InterestForm";
import { AuthContext } from "../contextapis/Context";
import { use } from "react";

const CropsDetails = () => {
  const { user } = use(AuthContext);
  console.log(user);

  const data = useLoaderData();
  const { name, photo, type, price, unit, quantity, location, description } =
    data;

  // is owner of this interest
  const isOwner = user?.email === data?.owner?.ownerEmail;

  return (
    <div className="min-h-screen bg-green-50 px-4 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div
          className={`bg-white rounded-2xl shadow-xl overflow-hidden
          ${isOwner ? "w-full" : "md:w-2/3"}`}
        >
          <img
            src={photo}
            alt="Crop"
            className="w-full h-72 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              {name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Type: {type}</span>
              </p>
              <p>
                <span className="font-semibold">Quantity: {quantity} kg</span>
              </p>
              <p>
                <span className="font-semibold">Unit: {unit} kg</span>
              </p>
              <p>
                <span className="font-semibold">Price per unit: ${price}</span>
              </p>
              <p>
                <span className="font-semibold">Location: {location}</span>
              </p>
              <p>
                <span className="font-semibold">Posted by: {user.name}</span>
              </p>
            </div>
            <p className="text-gray-600 mt-4 text-justify">{description}</p>
          </div>
        </div>

        {/* owner interest form condition */}
        {!isOwner && <InterestForm data={data}></InterestForm>}
      </div>
    </div>
  );
};

export default CropsDetails;
