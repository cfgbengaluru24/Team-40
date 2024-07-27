const ListOfInchargeProgram = ({ data = [], loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>List of Incharge Programs</h2>
            {data.length === 0 ? (
                <p>No programs available</p>
            ) : (
                <ul>
                    {data.map(program => (
                        <li key={program._id}>{program.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListOfInchargeProgram;
