import React from "react";
import "./loading.css";
const Card = ({ error }) => {
  return (
    <div className="loading-card">
      <div className="content">
        <span> {error && "Erorr"} </span>
        <div className="image"></div>
      </div>
      <div className="detiles">
        <p>
          Price: <span> </span>
        </p>
        <p>
          Market Cap: <span> </span>
        </p>
        <p>
          Daily Change: <span> </span>
        </p>
      </div>
    </div>
  );
};
function LoadingCard({ count, isloading, error, children }) {
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(<Card key={i} error={error && true} />);
  }
  return <>{isloading ? cards : error ? cards : children}</>;
}

export default LoadingCard;
