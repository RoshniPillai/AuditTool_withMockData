import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      <img src={require('./spinner.gif')} width="50px" height="50px" alt="loading..." />
      </div>
      
    </div>
  );
}
