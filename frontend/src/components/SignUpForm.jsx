import React from "react";
import '../../public/styles.css';
import Header from "./Header";
import Footer from "./Footer";

function SignupForm() {
    return (
        <>
            <Header />
            <form className="form">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="E-Mail ID" />
                <input type="password" placeholder="Password" />
                <button type="submit">Register</button><br />
                <a className="not-logged-in" href="/login">Already have an account? Login!</a>
            </form>
            <Footer />
        </>
    );
}

export default SignupForm;
