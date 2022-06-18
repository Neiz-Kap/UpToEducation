import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SubMenu = ({ menuItem }) => {
  // const [subnav, setSubnav] = useState(false);
  // const showSubMenu = () => setSubnav((subnav) => !subnav);

  return (
    <Nav.Item className="sidebar_list__item" as="li">
      <NavLink className="sidebar_list__link" to={menuItem.path}>
        <img className="sidebar_list__icon" src={menuItem.icon} alt="" />
        <p className="sidebar_list__title">{menuItem.title}</p>
        {/* <div onClick={showSubMenu}>
          {menuItem.subNav && subnav ? (
            <img
              className="sidebar_list__arrow"
              src={menuItem.iconOpened}
              alt=""
            />
          ) : menuItem.subNav ? (
            <img
              className="sidebar_list__arrow"
              src={menuItem.iconClosed}
              alt=""
            />
          ) : null}
        </div> */}
      </NavLink>
      {/* {subnav && menuItem.subNav && (
        <ul>
          <Nav.Item>
            {menuItem.subNav.map((item, index) => {
              return (
                <NavLink
                  className="sidebar_list__link sidebar_sublist__link"
                  to={item.path}
                  key={index}
                >
                  <img
                    className="sidebar_list__icon sidebar_sublist__icon"
                    src={item.icon}
                    alt=""
                  />
                  <p className="sidebar_list__title">{item.title}</p>
                </NavLink>
              );
            })}
          </Nav.Item>
        </ul>
      )} */}
    </Nav.Item>
  );
};

export default SubMenu;
