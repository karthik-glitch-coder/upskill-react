import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscibing the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between mt-2 bg-pink-100 sm:bg-yellow-100 lg:bg-fuchsia-100 w-full">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex py-10">
          <li className="px-2 ">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 hover:text-cyan-900 hover:font-semibold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2 hover:text-cyan-900 hover:font-semibold">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2 hover:text-cyan-900 hover:font-semibold">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-2 hover:text-cyan-900 hover:font-semibold">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className=" px-2 hover:text-cyan-900 hover:font-semibold flex">
            <Link to={"/cart"}>
              <div className="flex px-2">
                {
                  //cart icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                }
                {cartItems.length}
              </div>
            </Link>
          </li>
          <button
            className="px-2 hover:text-cyan-900 hover:font-semibold"
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
