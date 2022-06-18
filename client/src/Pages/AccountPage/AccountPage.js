import React from "react";
import { useCustomContext } from "./../../Hooks";
import { Link, useNavigate } from "react-router-dom";

import { COURSE_CATALOG_FULL_ROUTE } from "../../Utils/consts.js";

const AccountPage = (props) => {
  const { user } = useCustomContext();
  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    user.setUser({});
    user.setIsAuth(false);
    navigate(COURSE_CATALOG_FULL_ROUTE);
  };
  return (
    <div className="account">
      <h2>Личный кабинет</h2>
      <p>Привет!</p>
      <button onClick={onLogout}>Выйти из аккаунта</button>
    </div>
  );
};

export default AccountPage;
