import React from "react";
import "./loading.css";
function LoadingTitle({ isloading, error, children }) {
  return (
    <>
      {isloading ? (
        <div className="loading-title"></div>
      ) : error ? (
        <div className="error-title">Erorr</div>
      ) : (
        children
      )}
    </>
  );
}

export default LoadingTitle;
