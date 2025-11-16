import React from "react";

const InterestForm = ({ hasSentInterest }) => {
  return (
    <div className="card bg-white shadow-md mb-8 p-6">
      <h3 className="text-xl font-semibold mb-4">Send Interest</h3>
      {hasSentInterest ? (
        <p className="text-red-500">You’ve already sent an interest.</p>
      ) : (
        <>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <p className="mb-4">
            <strong>Total Price:</strong> --
          </p>
          <button className="btn btn-success">Submit Interest</button>
        </>
      )}
    </div>
  );
};

export default InterestForm;
