import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { categoryData } from "../../data/categoryListData";

import "./tabbar.style.scss";

const Tabbar = function ({ history }) {
  const [menu, setMenu] = useState([
    {
      title: "Shop All",
      id: 0,
      linkUrl: "shop",
    },
  ]);
  const [activeButton, setActiveButton] = useState(
    history.location.pathname.replace("/", "")
  );
  useEffect(() => {
    setMenu((menu) => menu.concat(categoryData));
  }, []);

  const handleToggle = (linkUrl) => {
    setActiveButton(linkUrl);
  };

  return (
    <>
      {menu.map(({ id, title, linkUrl }) => {
        const currentRoute = activeButton === linkUrl ? "active" : "";
        return (
          <button
            key={id}
            className={`tabbar-button ${currentRoute}`}
            name={title}
            onClick={function handle() {
              handleToggle(linkUrl);
              history.push(`/${linkUrl}`);
            }}
          >
            {title}
          </button>
        );
      })}
    </>
  );
};
export default withRouter(Tabbar);
