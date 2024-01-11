import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";

import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="flex h-[70px] justify-between items-center px-10 border-b">
      <Logo />
      <Navigation />
      <MobileNav />
    </header>
  );
};

export default Navbar;
