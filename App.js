import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    axios.get('http://localhost:8001/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

  const handleSearchTermChange = (term) => {
    
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default App;
