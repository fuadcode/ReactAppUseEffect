import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Header = () => {
  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">
          <h2>ProductSales</h2>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="relative text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/sliders"
              className="relative text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Slider
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="relative text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Products
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium no-underline"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
