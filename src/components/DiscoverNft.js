import React, { useState } from "react";

const DiscoverNft = ({ discoverNft }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showMore, setShowMore] = useState(false);

  const handleFilterClick = () => {
    setIsClicked(!isClicked);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsClicked(false);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section id="discover_nft">
      <div className="container">
        <h2 className="section_title">DISCOVER MORE NFTS</h2>
        <div className="option_container">
          <div className="option_content desktop">
            <p
              className={`option ${
                selectedCategory === "All Categories" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("All Categories")}
            >
              All Categories
            </p>
            <p
              className={`option ${selectedCategory === "Art" ? "active" : ""}`}
              onClick={() => handleCategoryClick("Art")}
            >
              Art
            </p>
            <p
              className={`option ${
                selectedCategory === "Celebrities" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Celebrities")}
            >
              Celebrities
            </p>
            <p
              className={`option ${
                selectedCategory === "Gaming" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Gaming")}
            >
              Gaming
            </p>
            <p
              className={`option ${
                selectedCategory === "Sport" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Sport")}
            >
              Sport
            </p>
            <p
              className={`option ${
                selectedCategory === "Music" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Music")}
            >
              Music
            </p>
            <p
              className={`option ${
                selectedCategory === "Crypto" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Crypto")}
            >
              Crypto
            </p>
          </div>
          <div className="filters_list">
            <div className="filter_button" onClick={handleFilterClick}>
              <img src="images/filter-results-button 1.png" alt="" />
              <p>All Filters</p>
            </div>
            <div className={`tab ${isClicked ? "show" : ""}`}>
              <p
                className={`tab-item ${
                  selectedCategory === "All Categories" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("All Categories")}
              >
                All Categories
              </p>
              <p
                className={`tab-item ${
                  selectedCategory === "Art" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Art")}
              >
                Art
              </p>
              <p
                className={`tab-item ${
                  selectedCategory === "Celebrities" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Celebrities")}
              >
                Celebrities
              </p>
              <p
                className={`tab-item ${
                  selectedCategory === "Gaming" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Gaming")}
              >
                Gaming
              </p>
              <p
                className={`tab-item ${
                  selectedCategory === "Sport" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Sport")}
              >
                Sport
              </p>
              <p
                className={`tab-item ${
                  selectedCategory === "Music" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Music")}
              >
                Music
              </p>
              <p
                className={`tab-item ${
                  selectedCategory === "Crypto" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("Crypto")}
              >
                Crypto
              </p>
            </div>
          </div>
        </div>
        <div className="discover_nft_content">
          {discoverNft
            .filter((item) =>
              selectedCategory === "All Categories"
                ? true
                : item.discoverNftCat === selectedCategory
            )
            .slice(0, showMore ? undefined : 12) // Display first 12 or all data
            .map(
              (
                {
                  discoverNftimgSrc,
                  discoverNftAvatarSrc1,
                  discoverNftAvatarSrc2,
                  discoverNftAvatarSrc3,
                  discoverNftAvatarSrc4,
                  discoverNftTitle,
                  discoverNftEtherimgSrc,
                  discoverNftEth,
                  discoverNftTime,
                },
                index
              ) => (
                <div className="content_card" key={index}>
                  <div className="img_container">
                    <img className="base_img" src={discoverNftimgSrc} alt="" />
                    <img
                      className="avatar avatar1"
                      src={discoverNftAvatarSrc1}
                      alt=""
                    />
                    <img
                      className="avatar avatar2"
                      src={discoverNftAvatarSrc2}
                      alt=""
                    />
                    <img
                      className="avatar avatar3"
                      src={discoverNftAvatarSrc3}
                      alt=""
                    />
                    <img
                      className="avatar avatar4"
                      src={discoverNftAvatarSrc4}
                      alt=""
                    />
                  </div>
                  <div className="text_container">
                    <h3 className="card_title">{discoverNftTitle}</h3>
                    <div className="stock">
                      <div className="ether">
                        <img src={discoverNftEtherimgSrc} alt="" />
                        <p>{discoverNftEth} ETH</p>
                      </div>
                      <p>1 Of 321</p>
                    </div>
                  </div>
                  <div className="bid_time">
                    <button className="btn_time">{discoverNftTime}</button>
                    <h5 className="collection_title">Place a bid</h5>
                  </div>
                </div>
              )
            )}
        </div>
        {!showMore && discoverNft.length > 12 && (
          <div className="btn_more_container">
            <button className="btn_more_nfts" onClick={handleShowMore}>
              More NFTs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscoverNft;
