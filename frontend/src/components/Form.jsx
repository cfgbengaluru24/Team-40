import React from "react";
import '../../public/styles.css'

function Form(props) {
    return (
        <form className="form">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="E-Mail ID" />
            {props.text === false && (
                <input type="password" placeholder="Password" />
            )}
            <button type="submit">{props.text ? "Login" : "Register"}</button><br/>
            <a className="not-logged-in">{props.text ? "No account? Sign Up!" : "Already have an account? Login!"}</a>
        </form>
    );
}

export default Form;
