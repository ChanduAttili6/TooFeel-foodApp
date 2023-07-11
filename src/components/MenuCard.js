import { CardImgTempString } from "../utils/constants";

const MenuCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="menu-card">
      <div className="menu-card-img">
        <img
          className="card-img"
          src={CardImgTempString.concat(cloudinaryImageId)}
        />
      </div>
      <h1>{name}</h1>
      <p>Description</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default MenuCard;
