import React from "react";
import { useNavigate } from "react-router-dom";

const LoginTimeExp = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1 style={{ color: "red" }}>
        
        Login Time Out
        <span>
          <button
            style={{ color: "green" }}
            onClick={() => navigate("/")}
            className="btn"
          >
            Enter Lab Again
          </button>
        </span>
      </h1>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfw499JvJ8pLOM8-rRiosiPlCefe8h2jrfQ&usqp=CAU"
        alt=""/>
    </div>
  );
};

export default LoginTimeExp;
