import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/item-slice';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [availability, setAvailability] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddItem = () => {
    if (!name) return window.alert('Please insert a name');
    if (!image) return window.alert('Please insert an image url');
    const newItem = {
      name,
      description,
      price,
      image,
      availability,
      amount,
    };
    dispatch(addItem(newItem));
  };

  const handleClearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setAvailability('');
    setAmount('');
  };

  return (
    <div id='form'>
      <input
        type='text'
        placeholder='Item Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setAvailability(e.target.value)}>
        <option value='available'>Available</option>
        <option value='unavailable'>Not available</option>
      </select>
      <input
        type='text'
        placeholder='Image URL'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleClearForm}>Clear</button>
      </div>
    </div>
  );
};

export default AddItemForm;
