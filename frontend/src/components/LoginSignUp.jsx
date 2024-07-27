import React from "react";
import Form from "./Form";
import '../../public/styles.css'

var userIsRegistered = true;

function LoginSignUp() {
    return (
        <div className="container">
            <h1 className="user-title2">{userIsRegistered? "Welcome Back!" : "Welcome!"}</h1>
            <Form text={userIsRegistered} />
        </div>
    );
}

export default LoginSignUp;
