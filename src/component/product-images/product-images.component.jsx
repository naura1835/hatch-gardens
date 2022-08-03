import React, { useState } from "react";

import { Wrapper, Image, ImageGroup, ImageItem } from "./product-images.styles";

const ProductImages = ({ image }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTab = (index) => {
    setActiveImage(index);
  };
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 75) {
      setActiveImage(activeImage + 1);
      if (activeImage === 3) {
        setActiveImage(0);
      }
    }

    if (touchStart - touchEnd < -75) {
      setActiveImage(activeImage - 1);
      if (activeImage === 0) {
        setActiveImage(3);
      }
    }
  }

  return (
    <Wrapper>
      <Image
        src={image && image[activeImage]}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      <ImageGroup>
        {image &&
          image.map((img, index) => {
            const currentImg = activeImage === index ? "active" : "";
            return (
              <ImageItem
                key={index}
                src={img}
                className={`${currentImg}`}
                onClick={() => handleTab(index)}
              />
            );
          })}
      </ImageGroup>
    </Wrapper>
  );
};

export default ProductImages;
