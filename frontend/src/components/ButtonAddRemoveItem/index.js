import React from 'react';
import './styles.css';
// handleAddItem, handleRemoveItem { quantity}

const ButtonAddRemoveItem = () => {
  const quantity =1 ;
  return (
    <div className='btnAddRemove'>
      {quantity !== 0 ? (
        <div className='btnAddRemove-positive'>
          <i
            class='fa fa-minus'
            aria-hidden='true'
           // onClick={handleRemoveItem}onClick={handleAddItem}
          ></i>
          <span> {quantity}</span>
          
          <i class='fa fa-plus' aria-hidden='true' ></i>
        </div>
      ) : (
        //onClick={handleAddItem}
        <div  className='btnAddRemove-negative'>
          <span>ADD</span>
          <i class='fa fa-plus' aria-hidden='true'></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
