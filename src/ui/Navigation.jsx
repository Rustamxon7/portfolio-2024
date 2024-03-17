/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../context/ProjectContext";
import {
  CiDesktop,
  CiGrid42,
  CiHome,
  CiYoutube,
  CiMemoPad,
} from "react-icons/ci";
import { isMobile } from "../utils/constant";

const Navigation = () => {
  const { isCurrent, setIsCurrent } = useContext(ProjectContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed right-4 top-0 z-20 flex h-screen flex-col justify-end gap-2 pb-24 lg:right-20 lg:justify-center lg:gap-8"
    >
      <NavButton
        onClick={() => {
          setIsCurrent("welcome");
          isMobile && window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <CiHome className="text-xl text-gray-50 lg:text-2xl" />
      </NavButton>
      <NavButton onClick={() => setIsCurrent("desktop")}>
        <CiDesktop className="text-xl text-gray-50 lg:text-2xl" />
      </NavButton>
      <NavButton onClick={() => setIsCurrent("projects")}>
        <CiGrid42 className="text-xl text-gray-50 lg:text-2xl" />
      </NavButton>
      <NavButton onClick={() => setIsCurrent("tv")}>
        <CiYoutube className="text-xl text-gray-50 lg:text-2xl" />
      </NavButton>
      {isMobile && (
        <NavButton onClick={() => setIsCurrent("experience")}>
          <CiMemoPad className="text-xl text-gray-50 lg:text-2xl" />
        </NavButton>
      )}
    </motion.div>
  );
};

export default Navigation;

const NavButton = ({ children, onClick }) => {
  return (
    <motion.button
      className="flex h-10 w-10 items-center justify-center gap-2 rounded-lg border border-[#ffffff45] bg-[#33323000] shadow-xl lg:h-12 lg:w-12"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ backdropFilter: "blur(10px)" }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
