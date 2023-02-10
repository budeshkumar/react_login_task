import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const memberpass = "abc@123";

    const [input, setInput] = useState("");
    let navigate = useNavigate();

    const InputEvent = (event) => {
        setInput(event.target.value);
    };
    const Submit = () => {
        if (memberpass === input) {
            return navigate("/LoginSuccess");
        }
        else {
            alert("Enter correct pasword");
        }

    };

    return (
        <>
        <div className="cards">
                <div className="card">
                    <h1 style={{ color: "white" }}>ENTER YOUR P1LEARING PASSWORD </h1>
                    <input
                        type="password"
                        onChange={InputEvent}
                        placeholder="**********"
                    />
                </div>
                <button onClick={Submit} className="btn">
                    Enter Lab
                </button>
                <div></div>
            </div>
        </>
    );
};

export default Login;
