import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { additem ,modifyitem} from '../redux/reducer/cart';
import './product.css'
import Productlist from './navbar/productlist';
const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === product.id);

  const addtocart = () => {
    dispatch(additem({ ...product, count: 1 }));
    navigate('/petaccessories');
  };
  return (
    <div className="products">
      <div className='img'> <img src={product.img} alt={product.title} />
      </div>
      <div className="details">
        <h3>{product.title}</h3></div>
      <div className="details">  <h3>RS{product.price}</h3></div>
      <div>
        {product.stock > 0 ?
          (<>
            {element?.count > 0 ? <button >added</button>
              : <button className='buttons' onClick={addtocart}>Add To Cart</button>}
          </>) :
          (<button className='outofstock'>out of stock</button>)}
      </div>
    
    </div>
  );
};
export default Product;
