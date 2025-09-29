import { Logo_Url } from "../utils/Constants";
import { Cart_Logo_Url } from "../utils/Constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/ UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtnReact, setloginbtnReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using a selector

  const cardItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-300 shadow-lg ">
      <div className="logo-container">
        <img className="w-40" src={Logo_Url} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center-safe">
          <li className="px-2  font-light rounded-xl  ">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3 ">
            <Link to="/" className=" rounded-md p-1 m-0.5  text-xl font-light">
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/about"
              className="text-xl font-light rounded-md p-1 m-0.5 "
            >
              About us
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="/contact"
              className="text-xl font-light rounded-md p-1 m-0.5 "
            >
              Contact us
            </Link>
          </li>
          <li className="px-3 ">
            <Link to="/cart" className="text-2xl  rounded-md p-1 m-0.5  ">
              🛒 ({cardItems.length})
            </Link>
          </li>
          <li className="px-3 ">
            <button
              className="p-1 m-0.5 text-lg font-light"
              onClick={() => {
                return loginbtnReact === "login"
                  ? setloginbtnReact("logout")
                  : setloginbtnReact("login");
              }}
            >
              {loginbtnReact}
            </button>
          </li>
          {/* <li className="px-4 text-xl font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
