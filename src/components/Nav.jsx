import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profilephoto from "../asset/profile.png";
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {
  const { user , logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  }

  return (
    <div className=" absolute backdrop-blur-lg w-full">
      <div className="navbar lg:h-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="justify-between">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-pacifico italic text-3xl text-white">
            Foody BD
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="justify-between">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || profilephoto} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu text-white menu-compact dropdown-content mt-3 p-2 bg-primary-focus rounded-box w-52"
                >
                  <li>
                    <NavLink to="/profile" className="justify-between">
                      {user.displayName}
                    </NavLink>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to='/login' className="btn btn-primary btn-outline">Log IN</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
