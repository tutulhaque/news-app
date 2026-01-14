import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center py-2">
      <img className="w-[400px]" src={logo} alt="" />
      <p className="text-accent">Jounalism without fear and favor</p>
      <p>{format(new Date(), "EEEE, MMMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
