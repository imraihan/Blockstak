import React from "react";

const TopCollectionright = ({
  index,
  vector,
  topImg,
  collectionTitle,
  price,
  percentage,
  color,
}) => {
  return (
    <div className="right">
      <div className="right_container">
        <div className="right_content">
          <h3>{index + 1}</h3>
          <div className="img_container">
            {vector && <img className="vector" src={vector} alt="" />}
            <img className="top_img" src={topImg} alt="" />
          </div>
          <div>
            <h5 className="collection_title">{collectionTitle}</h5>
            <p className="paragraph">{price}</p>
          </div>
          <h3 className="card_title" style={{ color: color }}>
            {percentage}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionright;
