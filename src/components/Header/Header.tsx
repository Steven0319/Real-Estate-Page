"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Navbar from "../Navbar/Navbar";
import { BsTelephone } from "react-icons/bs";

const Header: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between px-5 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg md:text-2xl font-semibold text-secondary dark:text-white tracking-tight">
            Steven.Real<span className="text-black dark:text-white">★</span>State
          </h1>
        </Link>

        {/* Menu Icon for Mobile */}
        <CiMenuFries
          className="block text-2xl text-secondary dark:text-white md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        {/* Navbar */}
        <Navbar openMobileMenu={openMobileMenu} />

        {/* Right buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="tel:+50612345678"
            className="flex items-center gap-2 text-secondary dark:text-white hover:text-black dark:hover:text-secondary transition-colors"
          >
            <BsTelephone className="text-lg" />
            <span className="text-sm font-medium">+506 1234 5678</span>
          </Link>
          <Link
            href="/login"
            className="bg-secondary hover:bg-black text-white px-4 py-2 rounded-xl text-sm transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;