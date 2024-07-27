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
            {data.map((user) => (
                <div key={user._id} className='user-card'>
                    <img src={user.image || 'default-image-url.jpg'} alt={user.name} className='user-image' />
                    <div className='user-info'>
                        <h3>{user.name}</h3>
                        <p><strong>Location:</strong> {user.location}</p>
                        <p><strong>Business:</strong> {user.business}</p>
                        <p><strong>Income:</strong> {user.income}</p>
                        <p><strong>Trainer:</strong> {user.trainer_id}</p>
                        <p><strong>Assigned:</strong> {user.isAssigned ? 'Yes' : 'No'}</p>
                        {isAssigned[user._id] ? (
                            <p>Assigned</p>
                        ) : (
                            <div className='assign-container'>
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
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AssignUsersComponent;
