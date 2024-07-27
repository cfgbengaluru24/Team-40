import React, { useState } from 'react';
import './FeedBackStyles.css';

const FeedbackComponent = () => {
    const [feedbacks, setFeedbacks] = useState(Array(10).fill(null));
    const [averageRating, setAverageRating] = useState(null);

    const handleFeedbackChange = (index, value) => {
        const newFeedbacks = [...feedbacks];
        newFeedbacks[index] = parseInt(value, 10);

        setFeedbacks(newFeedbacks);

        // Calculate average rating
        const validFeedbacks = newFeedbacks.filter(fb => fb !== null);
        const sum = validFeedbacks.reduce((a, b) => a + b, 0);
        const average = validFeedbacks.length > 0 ? (sum / validFeedbacks.length).toFixed(2) : null;

        setAverageRating(average);
    };

    return (
        <div className="feedback-container">
            <h4>Feedback</h4>
            {feedbacks.map((feedback, index) => (
                <div key={index} className="feedback-item">
                    <p>User {index + 1}</p>
                    <label>
                        <input
                            type="radio"
                            name={`feedback-${index}`}
                            value="1"
                            onChange={() => handleFeedbackChange(index, 1)}
                        />
                        <span>Very Poor</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={`feedback-${index}`}
                            value="2"
                            onChange={() => handleFeedbackChange(index, 2)}
                        />
                        <span>Poor</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={`feedback-${index}`}
                            value="3"
                            onChange={() => handleFeedbackChange(index, 3)}
                        />
                        <span>Average</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={`feedback-${index}`}
                            value="4"
                            onChange={() => handleFeedbackChange(index, 4)}
                        />
                        <span>Good</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={`feedback-${index}`}
                            value="5"
                            onChange={() => handleFeedbackChange(index, 5)}
                        />
                        <span>Very Good</span>
                    </label>
                </div>
            ))}
            {averageRating && (
                <div className="average-rating">
                    Average Rating: {averageRating}
                </div>
            )}
        </div>
    );
};

export default FeedbackComponent;
