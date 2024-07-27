import React, { useState } from "react";
import "../../../public/styles.css"
import Header from "../Header";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setError(null);
                localStorage.setItem('token', result.token);
                navigate('/admin')
            } else {
                setError(result.message || 'Login failed');
            }
        } catch (error) {
            setError('Error during login: ' + error.message);
        }
    };

    return (
        <>
            <Header />
            <form className="form" onSubmit={handleLogin}>
                <h1 className="user-title">Welcome Admin!</h1>
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
                <button type="submit">Login</button><br />
                {error && <p className="error">{error}</p>}
            </form>
            <Footer />
        </>
    );
}

export default AdminLogin;

