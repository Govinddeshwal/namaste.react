import { Cart_Img_Url } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, costForTwo, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={Cart_Img_Url + resData.info.cloudinaryImageId}
      />

      <h3 className="name">{name}</h3>
      <h4 className="cuisines">{cuisines}</h4>
      <h4 className="costfortwo">{costForTwo}</h4>
      <h4 className="avg-rating">{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
