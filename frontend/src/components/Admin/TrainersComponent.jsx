import React, { useState } from 'react';

const TrainersComponent = ({ data, loading, error, onDelete, onAssignProgram, programs }) => {
    const [assignedPrograms, setAssignedPrograms] = useState({}); // Track assigned programs

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAssign = async (trainerId, programId) => {
        try {
            await onAssignProgram(trainerId, programId);
            setAssignedPrograms((prev) => ({
                ...prev,
                [trainerId]: programId,
            }));
        } catch (err) {
            console.error('Failed to assign program:', err);
        }
    };

    return (
        <div className='trainers-table-container'>
            <table className='trainers-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Programs</th>
                        <th>Assign Program</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((trainer) => (
                        <tr key={trainer._id}>
                            <td>{trainer.name}</td>
                            <td>{trainer.email}</td>
                            <td>
                                {Array.isArray(trainer.programs) && trainer.programs.length > 0
                                    ? trainer.programs.join(', ')
                                    : 'None'}
                            </td>
                            <td>
                                <select
                                    onChange={(e) => handleAssign(trainer._id, e.target.value)}
                                    defaultValue=""
                                    disabled={!!assignedPrograms[trainer._id]}
                                    trainer-id={trainer._id} // Add custom attribute for selector reference
                                >
                                    <option value="" disabled>Select a Program</option>
                                    {programs.map((program) => (
                                        <option key={program._id} value={program._id}>
                                            {program.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => handleAssign(trainer._id, document.querySelector(`select[trainer-id="${trainer._id}"]`).value)}
                                    disabled={!!assignedPrograms[trainer._id]}
                                >
                                    Assign
                                </button>
                            </td>
                            <td>
                                <button
                                    className='delete-button'
                                    onClick={() => onDelete(trainer._id)}
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainersComponent;
