import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  if (toggleMenu || isOpen) {
    document.body.style.overflow = "hidden"; // lock scroll
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto"; // restore scroll
    document.documentElement.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };
}, [toggleMenu, isOpen]);

  return (
    <div className=" z-0 absolute text-white w-full px-5 py-4 bg-[#26282B] mx-auto">
      <div className=" container flex justify-between items-center text-white relative">
        {/* Logo */}
        <p className="flex items-center -space-x-1">
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[40px]"
            src="../../public/assets/Logo.png"
            alt=""
          />
          <span>assant</span>
        </p>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 justify-center">
          <li className="hover:text-blue-400"><a href="#About">About</a></li>
          <li className="hover:text-blue-400"><a href="#Projects">Projects</a></li>
          <li className="hover:text-blue-400"><a href="#Skills">Skills</a></li>
          {/* <li className="hover:text-blue-400"><a href="#Contact">Get In Touch</a></li> */}
        </ul>

        {/* Desktop button */}
         <a
        onClick={() => setIsOpen(true)}
        className=" hidden md:block cursor-pointer px-4 py-3 bg-blue-400 hover:bg-[#69c0ef] text-white rounded-full shadow-lg"
      >
        Get in touch
      </a>
        {/* contact form */}
        {isOpen && (
        <div
          className="   fixed inset-0 bg-black/70 flex items-center justify-center z-100"
          onClick={() => setIsOpen(false)}  
        >
          <div
            className=" w-[650px] rounded-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cursor-pointer absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
                
              <ContactForm />
          </div>
        </div>)}

        {/* Mobile open button */}
        <div className="md:hidden ">
          <img
            src="../../public/assets/menu_icon.svg"
            alt="menu"
            className="w-6 cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>

      {/* Mobile menu overlay */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: toggleMenu ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 bottom-0 w-full bg-[#101112]  z-50 md:hidden"
      >
        {/* Close button */}
        <button className=" block text-xl ms-auto pt-4 me-3 cursor-pointer text-gray-400 hover:text-blue-400"
            onClick={() => setToggleMenu(false)}>
          ✕
        </button>

        {/* Mobile nav links */}
        <ul className="flex flex-col items-center gap-6 mt-8 text-lg font-medium text-gray-400">
          <a className="hover:text-blue-400" href="#About" onClick={() => setToggleMenu(false)}>About</a>
          <a className="hover:text-blue-400" href="#Projects" onClick={() => setToggleMenu(false)}>Projects</a>
          <a className="hover:text-blue-400" href="#Skills" onClick={() => setToggleMenu(false)}>Skills</a>
          <a className="hover:text-blue-400" href="#Contact" onClick={() => setToggleMenu(false)}>Get In Touch</a>
        </ul>
      </motion.div>
    </div>
  );
};
