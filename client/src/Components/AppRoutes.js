import React, { useContext } from "react"
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { authRoutes, publicRoutes } from '../routes.js';
import { CATALOG_ROUTE } from '../Utils/consts.js';
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";
// import CatalogOfCourses from '../Pages/CatalogOfCourses/CatalogOfCourses.js';

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <Container>
      <Switch>
        {user.isAuth && authRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} />)}

        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} />
        )}
        <Redirect to={CATALOG_ROUTE} />
      </Switch>
    </Container>
  );
})

export default AppRouter;
