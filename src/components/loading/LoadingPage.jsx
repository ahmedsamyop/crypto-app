import React from "react";
import { Audio } from "react-loader-spinner";
import "./loading.css";
function LoadingPage() {
  return (
    <div className="loading-page">
      <Audio
        height="200"
        width="200"
        color="#0071bd"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
}

export default LoadingPage;
