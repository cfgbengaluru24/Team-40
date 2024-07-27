import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InlineBaselineData.css';

const InlineBaselineDataComponent = () => {
    const [income, setIncome] = useState('');
    const [occupation, setOccupation] = useState('');
    const [baselineIncome, setBaselineIncome] = useState('');
    const [baselineOccupation, setBaselineOccupation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({
            income,
            occupation,
            baselineIncome,
            baselineOccupation
        });

        // Show success toast
        toast.success('Data Added Successfully');
    };

    return (
        <div className="inline-baseline-data-container">
            <h4>Inline / Baseline Data</h4>
            <form onSubmit={handleSubmit} className="inline-baseline-data-form">
                <div className="form-column">
                    <div className="form-group">
                        <label>Inline Income:</label>
                        <input
                            type="text"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Inline Occupation:</label>
                        <input
                            type="text"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-group">
                        <label>Baseline Income:</label>
                        <input
                            type="text"
                            value={baselineIncome}
                            onChange={(e) => setBaselineIncome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Baseline Occupation:</label>
                        <input
                            type="text"
                            value={baselineOccupation}
                            onChange={(e) => setBaselineOccupation(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="submit-button-container">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default InlineBaselineDataComponent;
