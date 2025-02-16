import React from 'react'
import './productlist.css'
import Navbar from './navbar'
export default function Productlist(product) {
  return (
    <div>
      <div className="productlist">
        <div className='img'>
          <img src={product.img} alt={product.title} />
        </div>
        <div className="details">
          <h3>{product.title}
         ₹{product.price}</h3>
          </div> 
          <div >
            <button className='cart-button' onClick={product.decrementitem}>-</button>
            {product.count}
            <button className='cart-button' onClick={product.incrementitem}>+</button>
            <button className='cart-button' onClick={product.removeitem}>remove</button>
          </div>
          <div className='subtotal'>
            Subtotal: ₹{product.subtotal}  
            </div>
          
        </div>
      </div>
    
  )
}
