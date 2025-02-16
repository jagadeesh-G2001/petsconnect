import { configureStore } from "@reduxjs/toolkit";
import cartRededucer from './reducer/cart'
export default configureStore({
reducer:{
cart: cartRededucer
}
})
