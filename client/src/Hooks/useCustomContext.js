import { useContext } from "react";
import { Context } from "./../index";

const useCustomContext = () => {
  return useContext(Context);
};

export default useCustomContext;
