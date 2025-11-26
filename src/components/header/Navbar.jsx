import { IoMdClose, IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

import { navbar } from "../../contants/navbar";
import { useState } from "react";
import MobileNav from "./MobileNav";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  function handleToggleNav() {
    setNavOpen(!navOpen);
  }
  return (
    <>
      {/* logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 1.3,
        }}
        className="flex items-center gap-2 "
      >
        <div className="capitalize font-bold bg-linear-to-r from-gray-400 to-gray-200 text-lg rounded-xl px-4 py-2 text-purple-800">
          {" "}
          b
        </div>
        <span className="font-bold"> Bijeta Sah</span>
      </motion.div>

      {/* mobile nav buttons */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={handleToggleNav}
        className="lg:hidden  text-3xl text-gray-300"
      >
        {navOpen ? <IoMdClose /> : <IoMdMenu />}
      </motion.button>

      <nav className="md:flex items-center w-6/10 justify-between hidden">
        {/* desktop navbar */}
        <ul className="flex text-base gap-4">
          {navbar.map((item, i) => (
            <li key={i}>
              <motion.a
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  delay: 0.7 + i * 0.2,
                }}
                href="#"
                className=" relative text-gray-500 hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute w-0 h-0.5 group-hover:w-full bg-violet-400 transition-all duration-300 left-0 -bottom-1 "></span>
              </motion.a>
            </li>
          ))}
        </ul>

        {/* contact button */}
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.6,
            damping: 15,
            stiffness: 100,
            type: "spring",
            duration: 0.8,
          }}
          className="capitalize font-bold cursor-pointer bg-linear-to-r from-gray-400 to-gray-200 text-base rounded-xl px-4 py-2 text-purple-700  hover:from-violet-700 hover:to-violet-800 transition-colors duration-200 hover:text-gray-300"
        >
          Contact me
        </motion.button>
      </nav>
      <MobileNav navOpen={navOpen} onToggleNav={handleToggleNav} />
    </>
  );
}

export default Navbar;
