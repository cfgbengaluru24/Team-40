import React, { useState } from "react";
import '../../public/styles.css';
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/trainer/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Registration successful!');
                setError(null);
                navigate('/login');
            } else {
                setSuccess(null);
                setError(result.message || 'Registration failed');
            }
        } catch (error) {
            setSuccess(null);
            setError('Error during registration: ' + error.message);
        }
    };

    return (
        <>
            <Header />
            <form className="form" onSubmit={handleRegister}>
                <h1 className="user-title">Welcome!</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-Mail ID"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button><br />
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <a className="not-logged-in" href="/login">Already have an account? Login!</a>
            </form>
            <Footer />
        </>
    );
}

export default SignupForm;
