import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid="resCard" className=" m-4 p-4 w-56  bg-pink-50 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-details">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines?.join(", ")}</h5>
        <h5>
          {"⭐"}
          {avgRating}
        </h5>
        <h5>{costForTwo}</h5>
        <h5>{sla?.deliveryTime} Mins</h5>
        <h6 className="font-semibold">
          <span className="font-normal">User Name :</span> {loggedInUser}
        </h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
