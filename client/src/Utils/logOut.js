import React, { useContext } from "react";
import { Context } from "../index.js";

export const useLogOut = () => {
  const { user } = useContext(Context);
  user.setUser({})
  user.setIsAuth(false)
  localStorage.removeItem('token')
}