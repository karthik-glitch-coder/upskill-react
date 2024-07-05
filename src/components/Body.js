import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardIsOpen = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  //calling API(RES_LIST_URL) - restaurant lists
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1 className="text-center pt-16 text-xl font-semibold">
        Something went wrong!🥴! Please check you internet connection 🛜
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 flex wrap">
          <input
            type="text"
            className="p-2 m-4 border border-solid border-gray-600 rounded-lg"
            value={searchText}
            placeholder="restaurants name here"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="ml-1 m-4 px-2 py-0.5 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="m-4 px-2  bg-green-100 rounded-lg"
            onClick={() => {
              const filteredData = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="pt-2.5 mx-2 px-2 bg-gradient-to-r from-blue-200 to-transparent rounded-lg">
            <p>Try to Modify User Name</p>
            <input
              className=" px-2 border border-solid  border-gray-800 rounded-lg opacity-80"
              value={loggedInUser}
              placeholder="React.Context"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-box absolute">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className=""
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardIsOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
