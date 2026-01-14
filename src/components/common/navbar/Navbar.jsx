import React from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-3">
      <div></div>
      <div className="nav flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-4">
        <img src={userImg} alt="" />
        <button className="btn btn-primary px-10">
          <Link to={`/auth/login`}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
