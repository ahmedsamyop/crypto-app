import React from "react";
import { useNavigate } from "react-router-dom";
import "./error-page.css";
function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ replace set to true
    navigate("/", { replace: true });
  };
  return (
    <div className="error-page">
      <div className="content">
        <h1>404</h1>
        <p>Not Found...</p>
      </div>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default ErrorPage;
