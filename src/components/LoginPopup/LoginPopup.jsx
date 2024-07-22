import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const handleStateChange = () => {
    setCurrState(currState === "Login" ? "Sign Up" : "Login");
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" require />
          <p>By continuing , i agree to the terms of use & privacy policy,</p>
        </div>
       {currState === "Login" ? (
          <p>
            Create a new Account? <span onClick={handleStateChange}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={handleStateChange}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
