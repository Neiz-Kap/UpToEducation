import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { Context } from "./index";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from 'react-router-dom';

// import { Header, NavBar, AppRoutes } from './Components';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import AppRoutes from './Components/AppRoutes';
import { check } from "./HTTP/userAPI";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [isLoading, setLoadingPage] = useState(true);

  useEffect(() => {
    console.log(`До then: ${isLoading}`)
    // try {
    //   let data = check();
    //   user.setUser(data)
    //   user.setIsAuth(true)
    //   console.log(`data: ${data} ${JSON.stringify(data)}`)
    // }
    // finally {
    //   setLoading(false)
    //   setLoading(false)
    //   console.log(`finally сработал!: ${loading}`)

    // }
    check().then(data => {
      console.log(data)
      user.setUser(data)
      user.setIsAuth(true)
    }, err => {
      console.log(`err`, err)
    })
      // setLoadingPage(false)
      // console.log(`После catch!: ${isLoading}`)
      .finally(() => {
        setLoadingPage(false)
      })
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
      <div>ПРОРИСОВКА</div>
      <Header />
      <NavBar />
      <main className="c">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
})

export default App;
