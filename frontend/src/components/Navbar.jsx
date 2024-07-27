import React, { useState, useEffect } from 'react';
import { optionsadmins } from './optionslist';
import TrainersComponent from './Admin/TrainersComponent';
import UsersComponent from './Admin/UsersComponent';
import ProgramsComponent from './Admin/ProgramsComponent';
import AssignUsersComponent from './Admin/AssignUsersComponent'; // Import AssignUsersComponent

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setData] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const optionsToDisplay = optionsadmins;

    const api = 'http://localhost:5000';

    useEffect(() => {
        if (selectedOption) {
            fetchData(selectedOption);
        }
    }, [selectedOption]);

    useEffect(() => {
        fetchPrograms();
    }, []);

    const fetchData = async (option) => {
        let endpoint = '';

        switch (option) {
            case 'List of Trainers':
                endpoint = `${api}/api/admin/get-trainers`;
                break;
            case 'List of Users':
                endpoint = `${api}/api/users/fetch`;
                break;
            case 'List of Programs':
                endpoint = `${api}/api/program/get-programs`;
                break;
            case 'Assign Users':
                endpoint = `${api}/api/users/fetch`; // Adjust if needed
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

            if (option === 'List of Trainers') {
                if (Array.isArray(result.trainers)) {
                    setData(result.trainers);
                } else {
                    throw new Error('Data is not an array');
                }
            } else if (option === 'List of Users' || option === 'Assign Users') {
                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    throw new Error('Data is not an array');
                }
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

    const fetchTrainers = async () => {
        try {
            const response = await fetch(`${api}/api/admin/get-trainers`);
            const result = await response.json();
            return result.trainers;
        } catch (error) {
            setError(error.message);
            return [];
        }
    };

    const assignTrainer = async (userId, trainerId) => {
        try {
            const response = await fetch(`${api}/api/admin/assign-trainer`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, trainerId }),
            });

            const result = await response.json();

            if (result.message !== 'Trainer assigned successfully') {
                throw new Error(result.message);
            }

            // Update the data state to reflect the assignment
            setData((prevData) =>
                prevData.map((user) =>
                    user._id === userId
                        ? { ...user, trainer_id: trainerId, isAssigned: true }
                        : user
                )
            );
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteTrainer = async (trainerId) => {
        try {
            await fetch(`${api}/api/trainers/delete/${trainerId}`, {
                method: 'DELETE',
            });
            setData(data.filter((trainer) => trainer._id !== trainerId));
        } catch (error) {
            setError(error.message);
        }
    };

    const onAssignProgram = async (trainerId, programId) => {
        try {
            const response = await fetch(`${api}/api/admin/assign-program`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ trainerId, programId }),
            });

            const result = await response.json();

            if (result.message !== 'Program assigned successfully') {
                throw new Error(result.message);
            }

            // Update the data state to reflect the program assignment
            setData((prevData) =>
                prevData.map((trainer) =>
                    trainer._id === trainerId
                        ? { ...trainer, programs: [...trainer.programs, programId] }
                        : trainer
                )
            );
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
                {selectedOption === 'List of Trainers' && (
                    <TrainersComponent
                        data={data}
                        loading={loading}
                        error={error}
                        programs={programs}
                        onDelete={handleDeleteTrainer}
                        onAssignProgram={onAssignProgram} 
                    />
                )}
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
                {selectedOption === 'Assign Users' && (
                    <AssignUsersComponent
                        data={data}
                        loading={loading}
                        error={error}
                        fetchTrainers={fetchTrainers}
                        assignTrainer={assignTrainer}
                    />
                )}
                {/* Add similar components for other options */}
            </div>
        </div>
    );
};

export default Navbar;
