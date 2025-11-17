import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { TbLeaf } from "react-icons/tb";
import { AuthContext } from "../contextapis/Context";

const Navbar = () => {
  const { user, logout } = use(AuthContext);

  // when use logging out then route to login page
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    logout(() => navigate("/login"))
      .then(() => console.log("Logout"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/all_crop_post">All Crops</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/add-crop">Add Crop</NavLink>
                </li>
                <li>
                  <NavLink to="/my-posts">My Posts</NavLink>
                </li>
                <li>
                  <NavLink to="/my-interests">My Interests</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/all_crop_post">All Crops</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <TbLeaf className="text-green-600 text-3xl" />
          KrishiLink
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 secondary">
          {user ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all_crop_post">All Crops</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/add-crop">Add Crop</NavLink>
              </li>
              <li>
                <NavLink to="/my-posts">My Posts</NavLink>
              </li>
              <li>
                <NavLink to="/my-interests">My Interests</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all_crop_post">All Crops</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
