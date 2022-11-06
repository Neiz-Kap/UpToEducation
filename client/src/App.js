import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Loader,
  AppRoutes,
  Header,
  SideBar,
  ErrorBoundary,
  FallbackComponent,
} from "./Components";
import { Container } from "react-bootstrap";

import { observer } from "mobx-react-lite";
import { check } from "./HTTP/userAPI";
import { useCustomContext } from "./Hooks";

const App = observer(() => {
  const { user } = useCustomContext();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <SideBar />
        <Header />
        <main className="c">
          <Container className="fixed_container content__container">
            <Suspense fallback={<Loader />}>
              <AppRoutes />
            </Suspense>
          </Container>
        </main>
      </ErrorBoundary>
    </BrowserRouter>
  );
});

export default App;
