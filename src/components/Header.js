import { Logo_Url } from "../utils/Constants";
import { Cart_Logo_Url } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtnReact, setloginbtnReact] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_Url} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">
              <img className="cart" src={Cart_Logo_Url} />
            </Link>
          </li>
          <li>
            <button
              className="loginbtn"
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
