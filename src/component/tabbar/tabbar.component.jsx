import React, { useState } from "react";

import "./tabbar.style.scss";

const Tabbar = function ({ collections }) {
  const [activeButton, setActiveButton] = useState("Shop All");
  const [menu, setMenu] = useState([{ title: "Shop All", id: 0 }]);

  const toggleTab = (index) => {
    console.log(index);
  };
  const handleToggle = (e) => {
    const title = e.target.name;
    setActiveButton(title);
    // console.log(e);
    // console.log(e.target.attributes[1].value);
    toggleTab(e.target.attributes[1].value);
  };
  // const handleClick = (id) => {
  //   handleToggle;
  //   toggleTab(id);
  // };
  useState(() => {
    collections.forEach((item) => {
      setMenu((menu) => [...menu, item]);
    });
  }, []);
  console.log(menu);

  return (
    <>
      {menu.map(({ id, title }) => {
        const currentRoute = activeButton === title ? "active" : "";
        return (
          <button
            key={id}
            className={`tabbar-button ${currentRoute}`}
            name={title}
            onClick={handleToggle}
          >
            {title}
          </button>
        );
      })}
    </>
  );
};
export default Tabbar;
