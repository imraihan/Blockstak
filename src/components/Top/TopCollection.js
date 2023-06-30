import React from "react";
import TopCollectionLeft from "./TopCollectionLeft";
import TopCollectionMiddle from "./TopCollectionMiddle";
import TopCollectionright from "./TopCollectionright";

const TopCollection = ({
  collectionLeft,
  collectionMiddle,
  collectionRight,
}) => {
  if (!collectionLeft && !collectionMiddle && !collectionRight) {
    return <div>user2 not found</div>;
  }

  // const { title, imageSrc, imageSrc2, cardTitle, stock, highestBid } = collectionLeft[0];
  // const {collectionMiddletitle,collectionMiddleimageSrc,collectionMiddleimageSrc2, collectionMiddlehighestBid, collectionMiddlebtnText } = collectionMiddle;
  // const {vector, topImg,collectionTitle,price ,percentage,color } = collectionRight;

  return (
    <section id="top_collection">
      <div className="container">
        <div className="top_collection_content">
          {collectionLeft.map((item, index) => (
            <TopCollectionLeft
              key={index}
              title={item.title}
              imageSrc={item.imageSrc}
              imageSrc2={item.imageSrc2}
              cardTitle={item.cardTitle}
              stock={item.stock}
              highestBid={item.highestBid}
            />
          ))}
          <div className="middle">
            {collectionMiddle.map((item, index) => (
              <TopCollectionMiddle
                key={index}
                collectionMiddletitle={item.collectionMiddletitle}
                collectionMiddleimageSrc={item.collectionMiddleimageSrc}
                collectionMiddleimageSrc2={item.collectionMiddleimageSrc2}
                collectionMiddlehighestBid={item.collectionMiddlehighestBid}
                collectionMiddlebtnText={item.collectionMiddlebtnText}
              />
            ))}
          </div>
          <div className="right">
            <h3 className="card_title">TOP COLLECTIONS OVER</h3>
            <p className="right_sub_title">Last 7 days</p>
            {collectionRight.map((item, index) => (
              <TopCollectionright
                key={index}
                index={index}
                vector={item.vector}
                topImg={item.topImg}
                collectionTitle={item.collectionTitle}
                price={item.price}
                percentage={item.percentage}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollection;
