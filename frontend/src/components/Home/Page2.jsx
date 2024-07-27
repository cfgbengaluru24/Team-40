import React, { useState, useEffect } from 'react';
import '../../../public/styles.css'

const quotes = [
    `We, at Best Practices Foundation, have always worked on a Livelihood model.
    Everything in our institution evolves around the livelihood of women, be it small scale or medium scale.
    Women at our institution identify and choose their own model of business.
    We focus on all women caste basis - SC, ST, Far rural - remote areas, daily wage laborers.`,
    `Meet Mayaava, a resident from Bareilly, she is a daily wage laborer, working 10 to 15 days in a month,
    making around Rs.250 - 500. She underwent training with our institution, where she took a loan of around 30K,
    which assisted her in starting her own bangle business. As a consequence, now at present day, she is ready to open her own shop, and
    now the best part of this inspiring story is, she has created awareness and has brought up another woman in the saree business.
    The modules, the assessments, the mentors, helped this woman to uplift her livelihood, and earn 3 meals a day, very respectfully.`
];

const images = [
    '../../public/imgs/photo1.jpg', // Replace with actual paths to your images
    '../../public/imgs/photo4.jpg'
];

function displayQuote(setCurrentIndex) {
    const quoteContainer = document.getElementById("quote-container");
    quoteContainer.classList.add("hidden");
    setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % quotes.length);
        quoteContainer.classList.remove("hidden");
    }, 1000); // Wait for 1s (transition duration) before updating content and removing blur
}

function displayImage(setCurrentImageIndex) {
    const imageContainer = document.getElementById("image-container");
    imageContainer.classList.add("hidden");
    setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        imageContainer.classList.remove("hidden");
    }, 1000); // Wait for 1s (transition duration) before updating content and removing blur
}

function Page2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            displayQuote(setCurrentIndex);
            displayImage(setCurrentImageIndex);
        }, 5000); // Change quote and image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        function handleScroll() {
            const thirdPage = document.getElementById('leaderboard');
            const thirdBoxes = document.querySelectorAll('.third-box');
            const thirdPageTop = thirdPage.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (thirdPageTop <= windowHeight) {
                thirdBoxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add('fade-in');
                    }, index * 500); // 500ms delay between each box
                });
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='page2'>
            <div className='left'>
                <div id="quote-container" className='quote-container'>
                    <p id="quote">{quotes[currentIndex]}</p>
                </div>
            </div>
            <div className='right'>
                <div id="image-container" className='image-container'>
                    <img src={images[currentImageIndex]} alt="Slideshow" />
                </div>
            </div>
        </div>
    );
}

export default Page2;
