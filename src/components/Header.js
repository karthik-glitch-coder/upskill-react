import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)

  return (
    <div className="flex justify-between mt-2 bg-pink-100 sm:bg-yellow-100 lg:bg-fuchsia-100 w-full">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex py-10">
          <li className="px-2">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            <Link className={"nav-link"} to={"/"}>
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link className={"nav-link"} to={"/about"}>
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link className={"nav-link"} to={"contact"}>
              Contact Us
            </Link>
          </li>
          <li className="px-2">
            <Link className={"nav-link"} to={"grocery"}>
              Grocery
            </Link>
          </li>
          <li className="px-2">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
