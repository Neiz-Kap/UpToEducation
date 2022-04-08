import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { authRoutes, publicRoutes } from "../routes";
import { CATALOG_ROUTE } from "../Utils/consts";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Container>
      <Switch>
        {user.isAuth && authRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />)}
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />
        )}
        <Redirect to={CATALOG_ROUTE} />
      </Switch>
    </Container>
  );
})

export default AppRouter;
