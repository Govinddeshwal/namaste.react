import { Logo_Url } from "../utils/Constants";
import { Cart_Logo_Url } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginbtnReact, setloginbtnReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-300 shadow-lg ">
      <div className="logo-container">
        <img className="w-40" src={Logo_Url} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center-safe">
          <li className="px-3 text-3xl font-light rounded-md p-1 m-2  bg-gray-200">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3 ">
            <Link
              to="/"
              className=" rounded-md p-1 m-0.5  bg-gray-200 text-3xl font-light"
            >
              {" "}
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/about"
              className="text-3xl font-light rounded-md p-1 m-0.5  bg-gray-200"
            >
              About us
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/contact"
              className="text-3xl font-light rounded-md p-1 m-0.5  bg-gray-200"
            >
              Contact us
            </Link>
          </li>
          <li className="px-3 ">
            <Link
              to="/cart"
              className="text-3xl font-light rounded-md p-1 m-0.5  bg-gray-200"
            >
              Cart
            </Link>
          </li>
          <li className="text-3xl font-light ">
            <button
              className="p-2 m-2 text-xl font-light bg-gray-200 rounded-md"
              onClick={() => {
                return loginbtnReact === "login"
                  ? setloginbtnReact("logout")
                  : setloginbtnReact("login");
              }}
            >
              {loginbtnReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
