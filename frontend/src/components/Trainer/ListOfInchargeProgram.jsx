import React from 'react';

const ListOfInchargeProgram = ({ data, loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>List of Incharge Program</h2>
            <ul>
                {data.map(program => (
                    <li key={program._id}>{program.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListOfInchargeProgram;
