import React from "react";
import loader from "../../Assets/icons/loader.svg";

const Loader = () => {
  return (
    <div className="spinner-block d-flex justify-content-center align-items-center p-5">
      <img className="svgLoader" src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
