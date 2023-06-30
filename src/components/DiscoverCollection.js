import React from "react";

const DiscoverCollection = ({
  title,
  imageSrc,
  artistName,
  currentBid,
  timeRemaining,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
}) => {
  return (
    <section id="collect_art">
      <div className="container">
        <div className="collect_art_content">
          <div className="text_container">
            <h1 className="collect_art_title hero_title">
              DISCOVER, AND COLLECT DIGITAL ART NFTS
            </h1>
            <p className="collect_art_paragraph">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <div className="button_number">
              <button>Explore Now</button>
              <div className="numeric_container">
                <div className="numeric_content">
                  <h1 className="number_text hero_title">98k+</h1>
                  <p className="collect_art_paragraph">Artwork</p>
                </div>
                <div className="numeric_content">
                  <h1 className="number_text hero_title">12k+</h1>
                  <p className="collect_art_paragraph">Auction</p>
                </div>
                <div className="numeric_content">
                  <h1 className="number_text hero_title">15k+</h1>
                  <p className="collect_art_paragraph">Artist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="img_container">
            <div className="images">
              <div className="text_area">
                <div className="upper_part">
                  <h2 className="section_title">{title}</h2>
                  <div className="img_name">
                    <img src={imageSrc} alt="" />
                    <h3 className="card_title">{artistName}</h3>
                  </div>
                </div>
                <div className="lower_part">
                  <div className="left_side">
                    <p>Current Bid</p>
                    <p>{currentBid} ETH</p>
                  </div>
                  <div className="right_side">
                    <p>Ends in</p>
                    <p>{timeRemaining}</p>
                  </div>
                </div>
              </div>
              <img className="circle" src={imageSrc2} alt="" />
              <img className="top" src={imageSrc3} alt="" />
              <img className="middle" src={imageSrc4} alt="" />
              <img className="bottom" src={imageSrc5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCollection;
