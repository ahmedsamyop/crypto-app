import React from "react";
import "./error-fetch.css";
export default function ErrorFetch({ error }) {
  return (
    <div className="error">
      <div className="content">
        <h1>{error?.status}</h1>
        <p>
          {error?.data?.message} {error?.error}
        </p>
      </div>
    </div>
  );
}
