import { GET_PRODUCTS_SUCCESS } from "../actions/productAction.js";
import { products } from "../initialValues/cartItems.js";

const initialState={
    products:products
}
export default function productListReducer(state=initialState,{type,payload}){
    switch (type) {
        case GET_PRODUCTS_SUCCESS:
            
            return payload;
    
        default:
            return state;
    }
}