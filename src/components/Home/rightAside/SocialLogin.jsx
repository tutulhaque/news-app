import React from "react";
import { FaGitSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="space-y-2">
      <h1>Social Login</h1>
      <div className="space-y-2">
        <button className="btn btn-primary btn-outline w-full">
          <FcGoogle size={20} /> Google Login
        </button>
        <button className="btn btn-secondary btn-outline w-full">
          <FaGitSquare size={20} /> Github Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
