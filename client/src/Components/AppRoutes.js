import React from "react";
import { observer } from "mobx-react-lite";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { routes } from "../routes";
import { Container } from "react-bootstrap";
import { COURSE_ROUTE, COURSE_CATALOG_FULL_ROUTE } from "../Utils/consts";
import { useCustomContext } from "./../Hooks";

const AppRouter = observer(() => {
  const { user } = useCustomContext();
  const isAuth = user.isAuth;
  const isAdmin = user.user?.role === "ADMIN";
  const pages = useRoutes(routes(isAuth, isAdmin));
  return (
    <Container className="fixed_container content__container">
      {pages}
    </Container>
  );
});

export default AppRouter;
