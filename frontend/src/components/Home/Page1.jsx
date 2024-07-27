import React, { useState } from 'react';
import '../../../public/styles.css';

function Page1() {
    const [showElements, setShowElements] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);

    const toggleElements = () => {
        setShowElements(prevShowElements => !prevShowElements);
    };

    const playAudio = (language) => {
        if (currentAudio) {
            currentAudio.pause();
            setCurrentAudio(null);
        }

        const audio = new Audio(`../../public/audios/${language}.mp3`); // Adjust the path to your audio files
        audio.play();
        setCurrentAudio(audio);
    };

    return (
        <div className='home-one'>
            <h1 className='main-h1'>Best Practices Foundation</h1>
            <p className='sub-t'>"Move" wins global award for livehoods for youth!</p>
            <a className='sub-t this'>Scroll Down</a>
            <div className='icons'>
                <i className="fa-brands fa-facebook"><a href='https://www.facebook.com/bestpracticesfoundation/'/></i>
                <i className="fa-brands fa-instagram"><a href='https://www.instagram.com/bpfound'/></i>
                <i className="fa-brands fa-square-x-twitter"><a href='https://twitter.com/BestPracFound'/></i>
            </div>
            <div className='audio-div'>
                {showElements && (
                    <>
                        <p onClick={() => playAudio('hindi')}>हिंदी</p>
                        <p onClick={() => playAudio('kannada')}>ಕನ್ನಡ</p>
                        <p onClick={() => playAudio('telugu')}>తెలుగు</p>
                        <p onClick={() => playAudio('tamil')}>தமிழ்</p>
                    </>
                )}
                <i className="fa-solid fa-headphones" onClick={toggleElements}></i>
            </div>
        </div>
    );
}

export default Page1;
