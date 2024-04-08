// TransactionContainer.js

import React, { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native'; 
import db from './Firebase';

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const transactionsCollection = collection(db, 'transactions');
      const querySnapshot = await getDocs(transactionsCollection);
      const transactions = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactionsData(transactions);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setLoading(false);
    }
  };

  
  useFocusEffect(() => {
    fetchTransactions();
  });

  return (
    <TransactionsContext.Provider value={{ transactionsData, loading }}>
      {children}
    </TransactionsContext.Provider>
  );
};
