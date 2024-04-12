import React, { useContext, useState } from 'react';
import { CartContext } from './context';

export default function Cart() {
  const { products } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const item = products.products[0];
  console.log(item)

  function add() {
    setQuantity(quantity + 1);
  }

  function minus() {
    quantity > 1 ? setQuantity(quantity - 1) : alert("Quantity can't be less than 1");
  }


  const subtotal = item.price * quantity;
  const shipping = 50; 
  const total = subtotal + shipping;

  return (
    <div className='container my-4'>
        <div className='card p-5' style={{background:"aliceblue"}}>
        <div className='row align-items-center' >
        <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12 d-flex'>
          <img src={item.thumbnail}  alt={item.title} />
          <div className='card-body'>
            <h2 className='card-title'>{item.title}</h2>
            <p className='card-text'>{item.category}</p>
            <p className='card-text'>{item.description}</p>
            <h5 className='card-title'> ${item.price}</h5>
          </div>
        </div>
        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6'>
          <div className='input-group'>
            <button className='btn btn-outline-danger' onClick={minus}>-</button>
            <input type='text' className='form-control text-center' value={quantity} readOnly />
            <button className='btn btn-outline-primary' onClick={add}>+</button>
          </div>
        </div>
        <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6'>
          <div  style={{ textAlign: 'end' }}>
            <strong>Total: ${item.price * quantity}</strong>
          </div>
        </div>
      </div>
      <hr />
      <div className='row mt-4'>
        <div className='col-6'>
          <strong>Subtotal:</strong>
        </div>
        <div className='col-6' style={{ textAlign: 'end' }}>
          ${subtotal}
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <strong>Shipping:</strong>
        </div>
        <div className='col-6' style={{ textAlign: 'end' }}>
          ${shipping}
        </div>
      </div>
     
      <div className='row'>
        <div className='col-6'>
          <strong style={{fontWeight:"bold"}}>Total:</strong>
        </div>
        <div className='col-6' style={{ textAlign: 'end' }}>
          ${total}
        </div>
      </div>
        </div>
    
    </div>
  );
}
