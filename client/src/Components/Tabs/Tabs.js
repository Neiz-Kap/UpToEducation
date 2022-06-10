import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Tabs = ({ tabsList }) => {
  return (
    <Nav className="nav-tabs" as="ul" role="tablist">
      {tabsList.map(({ path, title }) => {
        return (
          <Nav.Item as="li" key={path}>
            <NavLink className="nav-link" to={path}>
              {title}
            </NavLink>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default Tabs;
