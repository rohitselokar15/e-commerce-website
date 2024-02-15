import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Filter from "./Filter";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="h-10 ">
        <nav className=" text-white bg-slate-900  fixed top-0 p-2 w-full">
          <ul className="flex justify-evenly">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              Dashboard
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link>
                <button onClick={toggleTheme}>
                  <i class="fa-solid fa-moon"></i>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div>
        <Filter />
      </div>
    </>
  );
};

export default Header;
