import React from "react";

const TopCollectionLeft = ({
  title,
  imageSrc,
  imageSrc2,
  stock,
  highestBid,
}) => {
  return (
    <div className="left">
      <img src={imageSrc2} alt="" />
      <div className="text_area">
        <div className="img_stock">
          <img className="avatar" src={imageSrc} alt="" />
          <div>
            <h3 className="card_title">{title}</h3>
            <p>{stock} in the stock</p>
          </div>
        </div>
        <div className="highest_bid">
          <p>
            <strong>Highest Bid</strong>
          </p>
          <h3 className="card_title">{highestBid} ETH</h3>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionLeft;
