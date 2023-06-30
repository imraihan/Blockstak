import React from "react";

const TopCollection = ({ title, imageSrc, imageSrc2, stock, highestBid }) => {
  return (
    <section id="top_collection">
      <div className="container">
        <div className="top_collection_content">
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

          <div className="middle">
            <div className="middle_content">
              <img className="card_img" src="/images/Group 88 (1).png" alt="" />
              <div className="middle_mix_area">
                <h3 className="card_title">The Futr Abstr</h3>
                <div className="middle_img_txt">
                  <img className="avatar" src="/images/Ellipse 95.png" alt="" />
                  <button className="btn_money">0.25 ETH</button>
                  <p className="stock">1 of 8</p>
                </div>
                <button className="btn_bid">Place a bid</button>
              </div>
            </div>
            <div className="middle_content">
              <img className="card_img" src="/images/Group 88 (2).png" alt="" />
              <div className="middle_mix_area">
                <h3 className="card_title">The Futr Abstr</h3>
                <div className="middle_img_txt">
                  <img className="avatar" src="/images/Ellipse 95.png" alt="" />
                  <button className="btn_money">0.25 ETH</button>
                  <p className="stock">1 of 8</p>
                </div>
                <button className="btn_bid">Place a bid</button>
              </div>
            </div>
            <div className="middle_content">
              <img className="card_img" src="/images/Group 88.png" alt="" />
              <div className="middle_mix_area">
                <h3 className="card_title">The Futr Abstr</h3>
                <div className="middle_img_txt">
                  <img className="avatar" src="/images/Ellipse 95.png" alt="" />
                  <button className="btn_money">0.25 ETH</button>
                  <p className="stock">1 of 8</p>
                </div>
                <button className="btn_bid">Place a bid</button>
              </div>
            </div>
          </div>
          <div className="right">
            <h3 className="card_title">TOP COLLECTIONS OVER</h3>
            <p className="right_sub_title">Last 7 days</p>
            <div className="right_container">
              <div className="right_content">
                <h3>1</h3>
                <div className="img_container">
                  <img className="vector" src="/images/Vector.png" alt="" />
                  <img
                    className="top_img"
                    src="/images/unsplash_WjIB-6UxA5Q.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="collection_title">CryptoFunks</h5>
                  <p className="paragraph">19,769.39</p>
                </div>
                <h3 className="card_title" style={{ color: "#14C8B0" }}>
                  +26.52%
                </h3>
              </div>
              <div className="right_content">
                <h3>2</h3>
                <div className="img_container">
                  <img
                    className="top_img"
                    src="/images/unsplash_fT49QnFucQ8.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="collection_title">CryptoFunks</h5>
                  <p className="paragraph">19,769.39</p>
                </div>
                <h3 className="card_title" style={{ color: "#FF002E" }}>
                  +26.52%
                </h3>
              </div>
              <div className="right_content">
                <h3>3</h3>
                <div className="img_container">
                  <img className="vector" src="/images/Vector.png" alt="" />
                  <img
                    className="top_img"
                    src="/images/unsplash_WjIB-6UxA5Q.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="collection_title">CryptoFunks</h5>
                  <p className="paragraph">19,769.39</p>
                </div>
                <h3 className="card_title" style={{ color: "#14C8B0" }}>
                  +26.52%
                </h3>
              </div>
              <div className="right_content">
                <h3>4</h3>
                <div className="img_container">
                  <img className="vector" src="/images/Vector.png" alt="" />
                  <img
                    className="top_img"
                    src="/images/unsplash_WjIB-6UxA5Q.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="collection_title">CryptoFunks</h5>
                  <p className="paragraph">19,769.39</p>
                </div>
                <h3 className="card_title" style={{ color: "#14C8B0" }}>
                  +26.52%
                </h3>
              </div>
              <div className="right_content">
                <h3>5</h3>
                <div className="img_container">
                  <img className="vector" src="/images/Vector.png" alt="" />
                  <img
                    className="top_img"
                    src="/images/unsplash_WjIB-6UxA5Q.png"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="collection_title">CryptoFunks</h5>
                  <p className="paragraph">19,769.39</p>
                </div>
                <h3 className="card_title" style={{ color: "#14C8B0" }}>
                  +26.52%
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollection;
