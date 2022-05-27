import React from "react";
import { Link } from "react-router-dom";
import "./CompoStyle.css";

const Navbar = () => {
  return (
    <>
      <nav className="body font-title flex items-center text-white sm:justify-around w-full">
        <ul className="w-4/6 space-x-4 flex justify-around bg-transparent lg:hidden">
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/tools">Tools</Link>
          </li>
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
