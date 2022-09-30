import React from "react";
import Nav from "./Nav";
import arrow from "../assets/images/icon-arrow-down.svg";
import bgHeader from "../assets/images/desktop/image-header.jpg";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgHeader})`,
      }}
      className="bg-cover bg-center h-[47rem] text-center"
    >
      <Nav />
      <h1 className="mt-[30px] uppercase text-6xl text-white">
        we are creatives
      </h1>
      <div className="flex justify-center mt-[130px]">
        <img src={arrow} alt="icon-arrow-down" />
      </div>
    </div>
  );
};

export default Header;
