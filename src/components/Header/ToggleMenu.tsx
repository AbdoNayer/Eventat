"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";

function ToggleMenu() {
  const toggleMenu = () => {
    console.log("toggle");
  };
  return (
    <button onClick={() => toggleMenu()} className="2lg:hidden md:!block">
      <CiMenuFries color="#FFF" size={30} />
    </button>
  );
}

export default ToggleMenu;
