import React from 'react';

const Sidebar = ({ options, setSelectedOption }) => {
    return (
        <div className="sidebar">
            {options.map((option, index) => (
                <button key={index} onClick={() => setSelectedOption(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
