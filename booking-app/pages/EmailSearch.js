
import React, { useState } from 'react';
import { db } from '@/firebase_setup/firebase';

    import { collection, query, where } from "firebase/firestore";

const EmailSearchInput = ({ onSearch }) => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSearch = () => {
        onSearch(email);
    };
const Ref = collection(db, "Bookings");

// Create a query against the collection.
const q = query(Ref, where("Contact", "==", "gabriejn@uci.edu"));
            console.log({q});

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
