import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div style={styles.successPage}>
            <h1 style={styles.heading}>Thank You for Donating!</h1>
            <p style={styles.paragraph}>Your donation has been successfully processed.</p>
            <Link to="/" style={styles.homeButton}>Go to Home</Link>
        </div>
    );
};

const styles = {
    successPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '2em',
        color: '#333',
    },
    paragraph: {
        marginBottom: '30px',
        fontSize: '1.2em',
        color: '#555',
    },
    homeButton: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1em',
        display: 'inline-block',
    }
};

export default Success;
