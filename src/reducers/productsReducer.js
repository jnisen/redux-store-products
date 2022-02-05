import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    LOADING_PRODUCTS,
    LOADING_PRODUCTS_SUCCESS,
    LOADING_PRODUCTS_ERROR,
    GET_DELETE_PRODUCT,
    GET_DELETE_PRODUCT_SUCCESS,
    GET_DELETE_PRODUCT_ERROR,
    GET_EDIT_PRODUCT,
    GET_EDIT_PRODUCT_SUCCESS,
    GET_EDIT_PRODUCT_ERROR
} from '../types/index'

// Each reducer has his own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProductId: null,
    editProduct: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
        case LOADING_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case LOADING_PRODUCTS_ERROR:
        case GET_DELETE_PRODUCT_ERROR:
        case GET_EDIT_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOADING_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case GET_DELETE_PRODUCT:
            return {
                ...state,
                deleteProductId: action.payload
            }
        case GET_DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.deleteProductId),
                deleteProductId: null
            }
        case GET_EDIT_PRODUCT:
            return {
                ...state,
                editProduct: action.payload
            }
        case GET_EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                editProduct: null,
                products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
            }
        default:
            return state;
    }
}

export default productReducer
