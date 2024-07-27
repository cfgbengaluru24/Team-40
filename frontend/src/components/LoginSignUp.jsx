import React from "react";
import Form from "./Form";
import '../../public/styles.css'
import Header from "./Header";
import Footer from "./Footer";



function LoginSignUp({ IsRegistered }) {
    return (
        <>
        <Header />
        <div className="container">
            <h1 className="user-title2">{IsRegistered? "Welcome Back!" : "Welcome!"}</h1>
            <Form text={IsRegistered} />
        </div>
        <Footer />
        </>
    );
}

export default LoginSignUp;
