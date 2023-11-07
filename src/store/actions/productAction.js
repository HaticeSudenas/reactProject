import axios from "axios";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

export function getProductsSuccess(products) {
    return { type: GET_PRODUCTS_SUCCESS, payload: products }
}
export function getProducts() {
    return function (dispatch) {
        let url = "http://localhost:8080/api/products/getall";

        return axios.get(url).then(result => dispatch(getProductsSuccess(result.data.data)))

    }
}


