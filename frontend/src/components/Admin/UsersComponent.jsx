import React from 'react';

const UsersComponent = ({ data, loading, error, onDelete }) => {
    if (loading) return <p className='text-gray-600'>Loading...</p>;
    if (error) return <p className='text-red-600'>Error: {error}</p>;

    return (
        <div className='users-table-container'>
            <table className='users-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Business</th>
                        <th>Income</th>
                        <th>Trainer</th>
                        <th>Assigned</th>
                        <th>Delete</th>
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
                                {/* Delete button */}
                                <button
                                    className='delete-button'
                                    onClick={() => onDelete(user._id)}
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

export default UsersComponent;
