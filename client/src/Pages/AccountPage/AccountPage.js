import React from "react";
import { useCustomContext } from "./../../Hooks";
import { Link } from "react-router-dom";

const AccountPage = (props) => {
  const { user } = useCustomContext();
  const onLogout = (e) => {
    e.preventDefault();
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
