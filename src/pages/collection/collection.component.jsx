import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { productsMapSelector } from "../../store/products/products.selector";

import CollectionItem from "../../component/collection-item/collection-item.component";

import { Items, Wrapper } from "./collection.styles";

gsap.registerPlugin(ScrollTrigger);

const CollectionPage = () => {
  const { collectionId } = useParams();
  const products = useSelector(productsMapSelector);
  const [collection, setCollection] = useState([]);
  const productsArrayRef = useRef([]);
  productsArrayRef.current = [];

  useEffect(() => {
    const getCollection = async (collectionObj) => {
      const items = await collectionObj?.items;

      setCollection(items);
    };

    getCollection(products[collectionId]);
  }, [products, collectionId]);

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
        { autoAlpha: 0, y: 30 },
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
    <Wrapper aria-label={collectionId}>
      <Items>
        {collection.map((item, index) => (
          <CollectionItem key={index} item={item} ref={addToRefs} />
        ))}
      </Items>
    </Wrapper>
  );
};

export default CollectionPage;
