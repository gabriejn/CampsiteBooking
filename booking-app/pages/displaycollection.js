import React, { useEffect } from 'react';
import { db } from '@/firebase_setup/firebase';
import { collection, getDocs } from 'firebase/firestore';

const DisplayCollection = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Campsites'));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>

    </div>
  );
};

export default DisplayCollection;
