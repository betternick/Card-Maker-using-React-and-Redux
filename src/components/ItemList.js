import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllItems } from '../redux/slices/item-slice';
import ItemListItem from './ItemListItem';

const ItemList = () => {
  const items = useSelector((state) => state.itemSlice.items);
  const dispatch = useDispatch();

  function handleRemove() {
    if (window.confirm('Remove all items?')) dispatch(removeAllItems());
  }

  return (
    <div>
      {items.map((item) => (
        <ItemListItem key={item.name} item={item} />
      ))}
      {items.length ? (
        <center>
          <button onClick={handleRemove}>Remove All</button>{' '}
        </center>
      ) : (
        ''
      )}
    </div>
  );
};

export default ItemList;
