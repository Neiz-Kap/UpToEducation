import React from "react";
import { Tabs } from "../../Components";
import { Outlet } from "react-router-dom";
import {
  INFO_FULL_ROUTE,
  DEVELOP_FULL_ROUTE,
  FAQ_FULL_ROUTE,
  HELP_FULL_ROUTE,
  SUPPORT_FULL_ROUTE,
} from "../../Utils/consts";

const ForUserPage = () => {
  const infoTabs = [
    {
      path: INFO_FULL_ROUTE,
      title: "Project Info",
    },
    {
      path: DEVELOP_FULL_ROUTE,
      title: "Develop Info",
    },
    {
      path: FAQ_FULL_ROUTE,
      title: "FAQ",
    },
    {
      path: HELP_FULL_ROUTE,
      title: "Help",
    },
    {
      path: SUPPORT_FULL_ROUTE,
      title: "Support",
    },
  ];
  return (
    <section className="content__section">
      <Tabs tabsList={infoTabs} />
      <Outlet />
    </section>
  );
};

export default ForUserPage;
