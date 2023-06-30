import React from "react";

const CreateAndSellNft = ({ sellNft }) => {
  const {
    TopsellAvatar,
    TopsellCardimg,
    BottomSellAvatar,
    BottomsellCardimg,
    MiddleSellAvatar,
    MiddleSellCardimg,
    sell_title,
    sell_paragraph,
  } = sellNft;

  return (
    <div id="sell_nft">
      <div className="container">
        <div className="sell_nft_content">
          <div className="img_container">
            <div className="top_bottom_container">
              <div className="top_content">
                <img className="avatar" src={TopsellAvatar} alt="" />
                <img className="top_card_img" src={TopsellCardimg} alt="" />
              </div>
              <div className="bottom_content">
                <img className="avatar" src={BottomSellAvatar} alt="" />
                <img
                  className="bottom_card_img"
                  src={BottomsellCardimg}
                  alt=""
                />
              </div>
            </div>
            <div className="middle_img_container">
              <img className="avatar" src={MiddleSellAvatar} alt="" />
              <img className="middle_card_img" src={MiddleSellCardimg} alt="" />
            </div>
          </div>
          <div className="text_container">
            <h2 className="sell_title">{sell_title}</h2>
            <p className="sell_paragraph">{sell_paragraph}</p>
            <button>Sign Up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAndSellNft;
