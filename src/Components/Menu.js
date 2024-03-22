import React from "react";
import { routeMaps } from "..";
import { Link } from "react-router-dom";
import "../styles/menu.css";

const Menu = () => {
  const mainRoutes = routeMaps.filter(({ isMain }) => isMain);

  return (
    <div>
      <ul>
        {mainRoutes.map(({ path, label }, index) => {
          return (
            <div className="list">
            <li key={index}>
              <Link to={path}>{label}</Link>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
