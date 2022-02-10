import React, { useState } from "react";
//import "./index.css";

// https://codepen.io/slyka85/pen/LbXYKQ

const Menu = () => {
  const [date, setData] = useState([
    { name: "home", link: "/" },
    { name: "blog", link: "/blog" },
    { name: "projects", link: "/projects" },
    { name: "GitHub", link: "https://github.com/tinoschroter" },
  ]);

  return <h1>hallo </h1>
};

const Item = (data) => {
  return (
    <li className="nav1 toggle accordion-toggle">
      <span className="icon-plus"></span>
      <a className="menu-link" href={data.link}>
        {data.name}
      </a>
    </li>
  );
};

export default Menu;
