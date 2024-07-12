import React, { useState } from 'react';
import EmailSearchInput from './EmailSearch';

const HomePage = () => {
    const handleEmailSearch = (email) => {
        // Implement your Firebase query logic here
        console.log('Searching for email:', email);
        // ...
    };

    return (
        <div>
            <h1>Search for User by Email</h1>
            <EmailSearchInput onSearch={handleEmailSearch} />
            {/* Display search results or other components */}
        </div>
    );
};

export default HomePage;