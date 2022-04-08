import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./HTTP/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (isLoading) {
    return (
      <div className="spinner-block d-flex justify-content-center align-items-center p-5">
        <strong className="mr-2">Loading...</strong>
        <Spinner animation="border" variant="info" role="status" aria-hidden="true" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main className="c">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
});

export default App;
