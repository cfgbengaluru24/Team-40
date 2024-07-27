import React from "react";
import Form from "./Form";
import '../../public/styles.css'
import Header from "./Header";
import Footer from "./Footer";

var userIsRegistered = false;

function LoginSignUp() {
    return (
        <>
        <Header />
        <div className="container">
            <h1 className="user-title2">{userIsRegistered? "Welcome Back!" : "Welcome!"}</h1>
            <Form text={userIsRegistered} />
        </div>
        <Footer />
        </>
    );
}

export default LoginSignUp;
