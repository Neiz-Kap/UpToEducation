import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import {
  AppRoutes,
  Header,
  SideBar
} from "./Components";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./HTTP/userAPI";
import loader from "./Assets/icons/loader.svg";

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
        <img className='svgLoader' src={loader} alt="Loading..." />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <SideBar />
      <Header />
      <main className="c">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
});

export default App;
