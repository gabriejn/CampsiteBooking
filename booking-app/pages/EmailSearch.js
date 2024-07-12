
import React, { useState } from 'react';

const EmailSearchInput = ({ onSearch }) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSearch = () => {
        onSearch(email);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter email address"
                value={email}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default EmailSearchInput;
