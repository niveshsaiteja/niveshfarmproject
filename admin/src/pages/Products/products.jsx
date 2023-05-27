import React from 'react';
import data from '../../constants/data';
import './style.css';

const Products = () => {
  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-info">{product.info}</p>
            <p className="product-price">Price: ₹{product.price}</p>
            <p className="product-price">Remaining items: 20</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
