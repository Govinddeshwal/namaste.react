import RestaurentCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
  // Local state variable - super powerful variable
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
  };

  // conditional rendering.
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            className="seacrch-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
          className="filter-button"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
