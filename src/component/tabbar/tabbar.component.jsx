import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { categoryData } from "../../data/categoryListData";

import "./tabbar.style.scss";

const Tabbar = function () {
  //{ history }
  let history = useLocation();
  const [menu, setMenu] = useState([
    {
      title: "Shop All",
      id: 0,
      linkUrl: "",
    },
  ]);
  const [activeButton, setActiveButton] = useState(
    history.pathname.replace("/", "")
  );
  const navigate = useNavigate();
  useEffect(() => {
    setMenu((menu) => menu.concat(categoryData));
  }, []);

  const handleToggle = (linkUrl) => {
    setActiveButton(linkUrl);
  };

  return (
    <div className="tab-view">
      {menu.map(({ id, title, linkUrl }) => {
        const currentRoute = activeButton === linkUrl ? "active" : "";
        return (
          <button
            key={id}
            className={`tabbar-button ${currentRoute}`}
            name={title}
            onClick={function handle() {
              handleToggle(linkUrl);
              // history.push(`/${linkUrl}`);
              navigate(`${linkUrl}`);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};
// export default withRouter(Tabbar);
export default Tabbar;
