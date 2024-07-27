import React from 'react'
import '../../public/styles.css'
import { loadStripe } from '@stripe/stripe-js';


const Header = () => {

  const handleDonate = async () => {
    const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);

    const body = {
      price: 2000
    };

    const response = await fetch('http://localhost:5000/api/pay/create-checkout-session', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  }

  return (
    <div className='header'>
      <div className='logo'>
        Best Practices Foundation
      </div>
      <div className='header-buttons-div'>
      <button className='header-button'>Testimonials</button>
        <button className='header-button'>About Us</button>
        <button className='header-button' onClick={handleDonate}>Support Us</button>
      </div>
    </div>
  )
}

export default Header