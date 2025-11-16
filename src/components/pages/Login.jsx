import React, { use } from "react";
import { AuthContext } from "../contextapis/Context";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const { login } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email.value;
    const photo = e.target.photoUrl?.value;
    const password = e.target.password.value;

    login(email, password).then((result) => {
      console.log(result);
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login Account</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control w-full">
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

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="input input-bordered w-full"
            />
            <Link
              to={""}
              className="text-sm text-blue-600 mt-1 inline-block hover:underline"
            >
              Forget password
            </Link>
          </div>

          <button className="btn bg-[#00BF83] w-full mt-4">Login</button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <Link to={"/register"} className="ml-1 secondary underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
