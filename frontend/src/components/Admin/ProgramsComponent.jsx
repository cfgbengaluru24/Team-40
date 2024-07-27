import React, { useState, useEffect } from 'react';

const ProgramsComponent = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api = 'http://localhost:5000';

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch(`${api}/api/program/get-programs`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                if (Array.isArray(result)) {
                    setPrograms(result);
                } else {
                    throw new Error('Programs data is not an array');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    if (loading) return <p className='text-gray-600'>Loading...</p>;
    if (error) return <p className='text-red-600'>Error: {error}</p>;

    return (
        <div className='programs-table-container'>
            <table className='programs-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Trainer</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {programs.map((program) => (
                        <tr key={program._id}>
                            <td>{program.name}</td>
                            <td>{program.trainerId}</td>
                            <td>{new Date(program.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProgramsComponent;
