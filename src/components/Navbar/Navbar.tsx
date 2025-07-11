import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { dataHeader } from "../Header/Header.data";
import { NavbarProps } from "./Navbar.types";

const Navbar = ({ openMobileMenu }: NavbarProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= window.innerHeight - 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isScrolling ? (
        <motion.nav
          key="navbar"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={animationNavbar}
          className="fixed top-10 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-3xl bg-white/20 backdrop-blur-md text-black w-fit hidden md:flex gap-5 shadow-lg border border-white/30"
        >
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="hover:text-secondary hover:border-b border-secondary transition"
            >
              {name}
            </Link>
          ))}
          
        </motion.nav>
      ) : (
        <div
          className={`${
            openMobileMenu
              ? "absolute z-[1] left-0 top-20 bg-white right-0 w-full px-4 py-4 block md:hidden"
              : "hidden"
          } gap-5`}
        >
          {dataHeader.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="block hover:text-secondary hover:border-b border-secondary transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

const animationNavbar: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: { opacity: 0, y: -20 },
};

export default Navbar;
