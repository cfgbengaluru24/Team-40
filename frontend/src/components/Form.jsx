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
            <button type="submit">{props.text ? "Login" : "Register"}</button>
        </form>
    );
}

export default Form;
