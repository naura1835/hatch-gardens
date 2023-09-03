import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { productsMapSelector } from "../../store/products/products.selector";

import CollectionItem from "../collection-item/collection-item.component";

import { Wrapper } from "./collections-overview.styles";

gsap.registerPlugin(ScrollTrigger);

const CollectionsOverview = () => {
  const products = useSelector(productsMapSelector);

  const [collection, setCollection] = useState([]);
  const productsArrayRef = useRef([]);
  productsArrayRef.current = [];

  useEffect(() => {
    const data = Object.keys(products).map((key) => products[key]); //turn the onject into an array

    const productsOverview = data.reduce((previous, { items }) => {
      const val = items.filter((_, id) => id < 6);
      return previous.concat(val);
    }, []);

    setCollection(productsOverview);
  }, [products]);

  useEffect(() => {
    productsArrayRef.current.forEach((el) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100",
          end: "center center",
        },
      });

      tl.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          delay: 0.4,
          y: 0,
          autoAlpha: 1,
        }
      );

      return () => {
        tl.kill();
      };
    });
  });

  const addToRefs = (el) => {
    if (el && !productsArrayRef.current.includes(el)) {
      productsArrayRef.current.push(el);
    }
  };

  return (
    <Wrapper title="plant collection">
      {collection.map((item) => (
        <CollectionItem key={item.id} item={item} ref={addToRefs} />
      ))}
    </Wrapper>
  );
};

export default CollectionsOverview;
