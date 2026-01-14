import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-center text-2xl font-semibold">
          Register your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {/* Photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="PhotoURL"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="font-semibold text-center">
            Already have an account?{" "}
            <Link className="text-secondary" to={`/auth/login`}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
