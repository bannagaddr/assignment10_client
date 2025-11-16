import React from "react";

const ReceivedInterests = ({ interests }) => {
  return (
    <div className="card bg-white shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Received Interests</h3>
      {interests.length === 0 ? (
        <p className="text-gray-500">No interests received yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Buyer Name</th>
                <th>Quantity</th>
                <th>Message</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {interests.map((interest) => (
                <tr key={interest._id}>
                  <td>{interest.userName}</td>
                  <td>{interest.quantity} kg</td>
                  <td>{interest.message}</td>
                  <td>{interest.status}</td>
                  <td className="flex gap-2">
                    {interest.status === "pending" && (
                      <>
                        <button className="btn btn-primary btn-sm">
                          Accept
                        </button>
                        <button className="btn btn-error btn-sm">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReceivedInterests;
