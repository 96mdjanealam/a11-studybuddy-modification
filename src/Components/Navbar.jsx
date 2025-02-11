import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const handleHowItWorks = () => {
    const howItWorks = document.getElementById("howItWorks");
    howItWorks.scrollIntoView({ behavior: "smooth" });
  };

  const links = (
    <>
      <li>
        <NavLink
          className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
          to="/assignments"
        >
          Assignments
        </NavLink>
      </li>
      {location.pathname === "/" && (
        <li>
          <div
            onClick={handleHowItWorks}
            className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            How It works
          </div>
        </li>
      )}

      {user && (
        <li>
          <NavLink
            className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
            to="/pendingAssignments"
          >
            Pending Assignments
          </NavLink>
        </li>
      )}
    </>
  );

  const userLinks = (
    <>
      <li>
        <NavLink
          className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
          to="/createAssignments"
        >
          Create Assignments
        </NavLink>
      </li>
      <hr className="my-2 border-gray-300 dark:border-gray-600" />
      <li>
        <NavLink
          className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
          to="/myAttemptedAssignments"
        >
          My Attempted Assignments
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#16C47F] dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <NavLink to="/">
            <div className="flex items-center">
              <img className="h-10" src={logo} alt="Logo" />
              <p className="text-xl font-bold px-4 py-2 rounded-lg ml-2 hidden sm:block text-gray-900 dark:text-white">
                Study Buddy
              </p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={toggleTheme}
            className="btn btn-sm border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 mr-2"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>

          {user ? (
            <div className="flex gap-2 items-center">
              <div className="dropdown">
                <img
                  tabIndex={0}
                  className="rounded-full w-8 h-8 object-cover"
                  role="button"
                  src={user?.photoURL}
                  alt="Profile"
                />
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
                >
                  {userLinks}
                </ul>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-red-500 dark:bg-red-600 text-white hover:bg-red-600 dark:hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
