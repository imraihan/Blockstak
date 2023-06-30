import React, { useEffect, useState } from "react";
import DiscoverCollection from "./DiscoverCollection";
import AmazingNft from "./AmazingNft";
import TopCollection from "./Top/TopCollection";
import FeaturedCollection from "./FeaturedCollection";
import CreateAndSellNft from "./CreateAndSellNft";
import DiscoverNft from "./DiscoverNft";

const CommonItems = () => {
  const [data, setData] = useState([]);
  const {
    user,
    collectionLeft,
    collectionMiddle,
    collectionRight,
    featuredCollections,
    sellNft,
    discoverNft,
  } = data;
  console.log(discoverNft);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error reading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user &&
        user.map((item, index) => (
          <DiscoverCollection
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
            artistName={item.artistName}
            currentBid={item.currentBid}
            timeRemaining={item.timeRemaining}
            imageSrc2={item.imageSrc2}
            imageSrc3={item.imageSrc3}
            imageSrc4={item.imageSrc4}
            imageSrc5={item.imageSrc5}
          />
        ))}

      <AmazingNft />

      <TopCollection
        collectionLeft={collectionLeft}
        collectionMiddle={collectionMiddle}
        collectionRight={collectionRight}
      />

      {featuredCollections && (
        <FeaturedCollection featuredCollections={featuredCollections} />
      )}

      {sellNft && <CreateAndSellNft sellNft={sellNft} />}

      {discoverNft && <DiscoverNft discoverNft={discoverNft} />}
    </div>
  );
};

export default CommonItems;
