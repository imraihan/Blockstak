import React from "react";

const FeaturedCollection = ({ featuredCollections }) => {
  return (
    <section id="feature_nft">
      <div className="container">
        <h2 className="section_title">COLLECTION FEATURED NFTS</h2>
        <div className="feature_content">
          {featuredCollections.map(
            (
              {
                featureImgSrc,
                featureImgSrc1,
                featureImgSrc2,
                featureImgSrc3,
                featureAvatar,
                featureName,
                featureItems,
              },
              index
            ) => (
              <div className="content" key={index}>
                <div className="img_container">
                  <img className="big_img" src={featureImgSrc} alt="" />
                  <div className="three_img_container">
                    <img src={featureImgSrc1} alt="" />
                    <img src={featureImgSrc2} alt="" />
                    <img src={featureImgSrc3} alt="" />
                  </div>
                </div>
                <div className="text_container">
                  <h3 className="card_title">{featureName}</h3>
                  <div className="item">
                    <div className="avatar_info">
                      <img src={featureAvatar} alt="" />
                      <p>by {featureName}</p>
                    </div>
                    <button className="btn_item">
                      Total {featureItems} Items
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
