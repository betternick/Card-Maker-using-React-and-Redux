// src/components/ItemDetailDialog.js

import React from 'react';

const ItemDetailDialog = ({ item, onClose }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Description: {item.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>Price: {item.price}</p>
        <p>Amount: {item.amount}</p>
        <p>{item.availability}</p>
      </div>
      <button onClick={(e) => onClose(e)}>Close</button>
    </div>
  );
};

export default ItemDetailDialog;
