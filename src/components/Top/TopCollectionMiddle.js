import React from "react";

const TopCollectionMiddle = ({
  collectionMiddletitle,
  collectionMiddleimageSrc,
  collectionMiddlehighestBid,
  collectionMiddlebtnText,
  collectionMiddleimageSrc2,
}) => {
  return (
    <div className="middle_content">
      <img className="card_img" src={collectionMiddleimageSrc2} alt="" />
      <div className="middle_mix_area">
        <h3 className="card_title">{collectionMiddletitle}</h3>
        <div className="middle_img_txt">
          <img className="avatar" src={collectionMiddleimageSrc} alt="" />
          <button className="btn_money">
            {collectionMiddlehighestBid} ETH
          </button>
          <p className="stock">1 of 8</p>
        </div>
        <button className="btn_bid">{collectionMiddlebtnText}</button>
      </div>
    </div>
  );
};

export default TopCollectionMiddle;
