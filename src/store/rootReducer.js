import { combineReducers } from "redux";
import cartReducer from "./reducer/cartReducer";
import  productListReducer  from "./reducer/productListReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    productList:productListReducer
})

export default rootReducer;