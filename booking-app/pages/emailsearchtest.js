// EmailSearchAndCollection.js

import React, { useState, useEffect } from 'react';
import { db } from '@/firebase_setup/firebase'; // Adjust the path based on your project structure
import { collection, getDocs } from 'firebase/firestore';

const EmailSearchAndCollection = () => {
  const [email, setEmail] = useState('');
  const [collectionData, setCollectionData] = useState([]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Campsites')); 
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setCollectionData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {

    handleSearch();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter email address"
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

  
    </div>
  );
};

export default EmailSearchAndCollection;
