import React, { useState, useEffect } from 'react';

const AssignUsersComponent = ({ data, loading, error, fetchTrainers, assignTrainer }) => {
    const [trainers, setTrainers] = useState([]);
    const [selectedTrainer, setSelectedTrainer] = useState({});
    const [isAssigned, setIsAssigned] = useState({});

    useEffect(() => {
        const loadTrainers = async () => {
            const trainers = await fetchTrainers();
            setTrainers(trainers);
        };
        loadTrainers();
    }, [fetchTrainers]);

    const handleAssign = async (userId) => {
        await assignTrainer(userId, selectedTrainer[userId]);
        setIsAssigned((prev) => ({ ...prev, [userId]: true }));
    };

    if (loading) return <p className='text-gray-600'>Loading...</p>;
    if (error) return <p className='text-red-600'>Error: {error}</p>;

    return (
        <div className='assign-users-container'>
            <table className='assign-users-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Business</th>
                        <th>Income</th>
                        <th>Trainer</th>
                        <th>Assigned</th>
                        <th>Assign</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.location}</td>
                            <td>{user.business}</td>
                            <td>{user.income}</td>
                            <td>{user.trainer_id}</td>
                            <td>{user.isAssigned ? 'Yes' : 'No'}</td>
                            <td>
                                {isAssigned[user._id] ? (
                                    'Assigned'
                                ) : (
                                    <div>
                                        <select
                                            value={selectedTrainer[user._id] || ''}
                                            onChange={(e) =>
                                                setSelectedTrainer((prev) => ({
                                                    ...prev,
                                                    [user._id]: e.target.value,
                                                }))
                                            }
                                            disabled={user.isAssigned}
                                        >
                                            <option value='' disabled>Select Trainer</option>
                                            {trainers.map((trainer) => (
                                                <option key={trainer._id} value={trainer._id}>
                                                    {trainer.name}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => handleAssign(user._id)}
                                            disabled={!selectedTrainer[user._id]}
                                        >
                                            Assign
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssignUsersComponent;
