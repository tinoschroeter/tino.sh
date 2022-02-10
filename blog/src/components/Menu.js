import React, { useState } from "react";
// https://codepen.io/slyka85/pen/LbXYKQ

const Menu = ({ color }) => {
  const [data] = useState([
    { name: "home", link: "/" },
    { name: "blog", link: "/blog" },
    { name: "projects", link: "/projects" },
    { name: "GitHub", link: "https://github.com/tinoschroeter" },
  ]);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  return (
    <div className="menu-container" onClick={menuHandler}>
      <div className="menu-wrapper">
        <div className={!menuOpen ? "hamburger-menu" : "hamburger-menu open"}>
          <span style={{ backgroundColor: color }}></span>
          <span style={{ backgroundColor: color }}></span>
          <span style={{ backgroundColor: color }}></span>
        </div>
      </div>
      <ul
        className="menu-list accordion"
        style={{ display: !menuOpen ? "none" : "block" }}
      >
        {data.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li className="toggle accordion-toggle">
      <span className="icon-plus"></span>
      <a href={item.link}>{item.name}</a>
    </li>
  );
};

export default Menu;
