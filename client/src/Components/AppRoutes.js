import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { authRoutes, publicRoutes } from "../routes";
import { COURSE_ROUTE, CATALOG_ROUTE } from "../Utils/consts";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Container className="fixed_container content__container mt-3">
      <Switch>
        {user.isAuth && authRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />)}
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />
        )}
        <Route exact path={COURSE_ROUTE}>
          <Redirect to={CATALOG_ROUTE} />
        </Route>
        <Redirect to={CATALOG_ROUTE} />
      </Switch>
    </Container>
  );
})

export default AppRouter;
