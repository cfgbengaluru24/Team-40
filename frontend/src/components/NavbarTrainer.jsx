import React, { useState, useEffect } from 'react';
import { optionstrainer } from './optionslist';
import UsersComponent from './Admin/UsersComponent';
import ProgramsComponent from './Admin/ProgramsComponent';
import FeedbackComponent from './Trainer/FeedbackComponent';
import TraineesChart from './Graphs/TraineesChart';
import InlineBaselineDataComponent from './Trainer/InlineBaselineDataComponent';
import AddFAQsComponent from '../../../backend/controllers/FAQs/AddFAQsComponent';

const NavbarTrainer = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setData] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const optionsToDisplay = optionstrainer;
    const api = 'http://localhost:5000';

    useEffect(() => {
        if (selectedOption) {
            fetchData(selectedOption);
        }
    }, [selectedOption]);

    useEffect(() => {
        fetchPrograms();
    }, []);

    const handleAddFAQs = async (faqs) => {
        const programId = "60d0fe4f5311236168a109cb";
        try {
            const response = await fetch(`${api}/api/knowledge/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ programId, faqs }),
            });

            if (!response.ok) {
                throw new Error("Failed to add FAQs");
            }

            console.log("FAQs added successfully");
        } catch (error) {
            console.error("Error adding FAQs:", error);
        }
    };

    const fetchData = async (option) => {
        let endpoint = '';

        switch (option) {
            case 'List of Users':
                endpoint = `${api}/api/users/fetch`;
                break;
            case 'List of Programs':
                endpoint = `${api}/api/program/get-programs`;
                break;
            case 'Feedback of User':
                break;
            default:
                return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(endpoint);
            const result = await response.json();
            console.log('Fetched data:', result);

            if (Array.isArray(result)) {
                setData(result);
            } else {
                throw new Error('Data is not an array');
            }
        } catch (error) {
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchPrograms = async () => {
        try {
            const response = await fetch(`${api}/api/program/get-programs`);
            const result = await response.json();
            console.log('Fetched programs:', result);

            if (Array.isArray(result)) {
                setPrograms(result);
            } else {
                throw new Error('Programs data is not an array');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-elem'>
                    {optionsToDisplay.map((option, index) => (
                        <button key={index} onClick={() => setSelectedOption(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className='content'>
                {selectedOption === 'List of Users' && (
                    <UsersComponent
                        data={data}
                        loading={loading}
                        error={error}
                    />
                )}
                {selectedOption === 'List of Programs' && (
                    <ProgramsComponent />
                )}
                {selectedOption === 'Feedback of User' && (
                    <FeedbackComponent />
                )}
                {selectedOption === 'Inline / Baseline Data' && (
                    <InlineBaselineDataComponent />
                )}
                {selectedOption === "Add FAQs" && (
                    <AddFAQsComponent onAddFAQs={handleAddFAQs} />
                )}
                {selectedOption === 'My Statistics' && (
                    <TraineesChart />
                )}
            </div>
        </div>
    );
};

export default NavbarTrainer;
