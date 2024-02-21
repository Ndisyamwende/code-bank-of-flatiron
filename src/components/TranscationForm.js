import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    anount: '',
    category: '',
  });
  
const handleChange = (e) => {
  setNewTransaction(
    {
      ...newTransaction,
      [e.target.name]: e.target.value,

    }
  );
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  onAddTransaction(newTransaction);

 
  setNewTransaction({
    date : '',
    description: '',
    amount: '',
    category: '',
  });
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
        />
      </label>

      <label>
        Description:
        <input
        type="text"
        name="description"
        value={newTransaction.description}
        onChange={handleChange}
        /> 
      </label>


      <label>
        Amount:
        <input
          type="amount"
          value={newTransaction.amount}
          onChange={handleChange}
        />
      </label>
      <lable>
        Category:
        <input
        type="text"
        name="category"
        value={newTransaction.category}
        onChange={handleChange}
        />
      </lable>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
