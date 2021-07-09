import React, { useState } from "react";

import { Wrapper, Image, ImageGroup, ImageItem } from "./product-image.styles";

const ProductImages = ({ image }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleTab = (index) => {
    setActiveImage(index);
  };

  return (
    <Wrapper>
      <Image src={image[activeImage]} />
      <ImageGroup>
        {image.map((img, index) => {
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
