import React from "react";
import '../../public/styles.css';
import Footer from "./Footer";
import Header from "./Header";

function LoginForm() {
    return (
        <>
            <Header />
            <form className="form">
            <h1 className="user-title">Welcome Back!</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button><br />
                <a className="not-logged-in" href="/register">No account? Sign Up!</a>
            </form>
            <Footer />
        </>
    );
}

export default LoginForm;
