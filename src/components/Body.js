import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  // Local state variable - super powerful variable
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    let allRestaurants = [];

    json?.data?.cards?.forEach((card) => {
      const restaurants =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants) {
        allRestaurants = [...allRestaurants, ...restaurants];
      }
    });

    // ✅ Remove duplicates based on restaurant info.id
    const uniqueRestaurants = allRestaurants.filter(
      (res, index, self) =>
        index === self.findIndex((r) => r.info.id === res.info.id)
    );

    console.log(
      "Total restaurants fetched (unique):",
      uniqueRestaurants.length
    );

    setlistOfRestaurants(uniqueRestaurants);
    setFilteredRestaurant(uniqueRestaurants);
    console.log(listOfRestaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>It looks you are offline! Please check your internet connection.</h1>
    );
  }

  // conditional rendering.
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className=" m-4">
          <input
            placeholder="Search Restaurant"
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-1 bg-orange-400 m -2 rounded-md cursor-pointer"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="flex m-3 p-1 bg-orange-400 rounded-lg cursor-pointer"
          onClick={() => {
            const filteredList = filteredRestaurant.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className=" flex  flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} />
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
