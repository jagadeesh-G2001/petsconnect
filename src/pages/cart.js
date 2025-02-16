import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Productlist from '../component/navbar/productlist';
import { modifyitem, removeitem } from '../redux/reducer/cart';
import './cart.css'
import Navbar from '../component/navbar/navbar';

export default function Checkoutpage() {
  const list = useSelector((state)=> state.cart.list);
  const subtotal = useSelector((state)=> state.cart.subtotal);
  const total = useSelector((state)=> state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate total whenever subtotal changes
    dispatch({ type: 'cart/setTotal', payload: subtotal });
  }, [subtotal, dispatch]);

  const incrementitem = (item) => {
    dispatch(modifyitem({...item, count:item.count+1}));
  }
  
  const decrementitem = (item) => {
    if(item.count === 1){
      dispatch(removeitem(item));
    } else {
      dispatch(modifyitem({...item, count:item.count-1}));
    }
  };
  
  const removeitemfromcart = (item) => {
    dispatch(removeitem(item));
  }

  return (
    <>
    <div><Navbar/></div>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <Productlist
              {...item}
              key={item.id}
              incrementitem={() => incrementitem(item)}
              decrementitem={() => decrementitem(item)} 
              removeitem={() => removeitemfromcart(item)}
              subtotal={item.subtotal}
              total={total}
            />
          ))}
       <div className='totalvalue'> <h3>Total: ₹{total.toFixed(2)}</h3> </div>
       <button onClick={() => { alert("place order success"); window.location.reload(); }}>Place Order</button>
        </>
      ) : (
        <div>
        <h2>No products in your Cart</h2>
        </div>
      )}
    </>
  );
}
