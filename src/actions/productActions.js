import clientAxios from '../config/axios'
import Swal from 'sweetalert2'

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
    GET_EDIT_PRODUCT_ERROR,
    START_EDITING_PRODUCT
} from '../types'

//Add new product

export function addNewProduct(product) {
    return async (dispatch) => {
        dispatch(addProduct())
        try {
            //insert into API
            await clientAxios.post('/products', product)
            //Update the state if no error exists
            dispatch(addProductSuccess(product))

            Swal.fire(
                'Success',
                'Product Added',
                'success'
            )

        } catch (err) {
            console.log(err)

            dispatch(addProductError(true))

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = error => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
})


export function getProducts() {
    return async (dispatch) => {
        dispatch(loadingProduct())

        try {
            const response = await clientAxios.get('/products')
            dispatch(loadingProductsSuccess(response.data))
        } catch (err) {
            dispatch(loadingProductsError())
        }
    }
}


const loadingProduct = () => ({
    type: LOADING_PRODUCTS,
    payload: true
})

const loadingProductsSuccess = (products) => ({
    type: LOADING_PRODUCTS_SUCCESS,
    payload: products
})


const loadingProductsError = () => ({
    type: LOADING_PRODUCTS_ERROR,
    payload: true
})


export function deleteProduct(id) {
    return async (dispatch) => {
        dispatch(getDeleteProduct(id))

        try {
            await clientAxios.delete(`/products/${id}`)

            dispatch(getDeleteProductSuccess())

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } catch (err) {
            console.log(err)
            dispatch(errorDeleteProduct())
        }
    }
}

const getDeleteProduct = (id) => ({
    type: GET_DELETE_PRODUCT,
    payload: id
})

const getDeleteProductSuccess = () => ({
    type: GET_DELETE_PRODUCT_SUCCESS,
})

const errorDeleteProduct = () => ({
    type: GET_DELETE_PRODUCT_ERROR,
    payload: true
})


export function editProduct(product){
    return(dispatch) => {
        dispatch(getEditProduct(product))
    }
}

const getEditProduct = (product) => ({
    type: GET_EDIT_PRODUCT,
    payload: product
})

export function editProductAction(product){
    return async(dispatch) => {
        dispatch(getEditProductAction(product))

        try {
            await clientAxios.put(`/products/${product.id}`, product)

            dispatch(getEditProductSuccess(product))

        } catch (err) {
            console.log(err)
            dispatch(errorEditProduct())
        }
    }
}

const getEditProductAction = () => ({
    type: START_EDITING_PRODUCT
})

const getEditProductSuccess = (product) => ({
    type: GET_EDIT_PRODUCT_SUCCESS,
    payload: product
})

const errorEditProduct = () => ({
    type: GET_EDIT_PRODUCT_ERROR
})
