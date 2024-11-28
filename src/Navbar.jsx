import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./authSlice";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const showNav = () => setActive("navBar activeNavbar");
  const removeNavbar = () => setActive("navBar");

  const handleLogout = () => {
    // Clear state and local storage
    dispatch(logout());
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineModeOfTravel className="icon" />
              <span> Travel</span>..`IN`..<span>Dia</span>
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">Home</Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">About</Link>
            </li>
            <li className="navItem">
              <Link to="/bookings" className="navLink">Bookings</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>
            <li className="navItem">
              <Link to="/tourism-development" className="navLink">Tourism Dev</Link>
            </li>

            {/* Authenticated User Options */}
            {isAuthenticated ? (
              <>
                <li className="navItem">
                  <img
                    src="/profile-icon.png" // Replace with your profile icon path
                    alt="Profile"
                    className="profile-logo"
                    title={user?.email}
                    onClick={() => navigate("/profile")}
                  />
                </li>
                <li className="navItem">
                  <button onClick={handleLogout} className="btn">Logout</button>
                </li>
              </>
            ) : (
              // Non-Authenticated User Options
              <>
                <li className="navItem">
                  <Link to="/signin" className="btn">Login</Link>
                </li>
                <li className="navItem">
                  <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseSquare className="icon" />
        </div>
      </header>

      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div>
    </section>
  );
};

export default Navbar;
