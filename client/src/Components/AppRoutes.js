import React from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { routes } from "../routes";
import { COURSE_ROUTE, COURSE_CATALOG_FULL_ROUTE } from "../Utils/consts";
import { useCustomContext } from "./../Hooks";

const AppRoutes = observer(() => {
  const { user } = useCustomContext();
  const isAuth = user.isAuth;
  const isAdmin = user.user?.role === "ADMIN";
  const pages = useRoutes(routes(isAuth, isAdmin));
  return pages;
});

export default AppRoutes;
