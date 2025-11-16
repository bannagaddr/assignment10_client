import React, { use } from "react";
import { AuthContext } from "../contextapis/Context";
import { Link, useNavigate } from "react-router";

const Registration = () => {
  // destructuring from provider
  const { registration } = use(AuthContext);
  // after registration then go home
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoUrl.value;
    const password = e.target.password.value;
    // console.log(name, email, password, photo);

    registration(email, password).then((result) => {
      console.log(result);
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleRegistration} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn bg-[#00BF83] w-full mt-4">Register</button>
        </form>

        <p className="text-center mt-4">
          Already have an account?
          <Link to={"/login"} className="secondary underline ml-1">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
