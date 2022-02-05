import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { editProductAction } from '../actions/productActions'

export default function EditProduct() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.editProduct)

    const [productState, setProductState] = useState({ name: '', price: '' })

    useEffect(() => {
        setProductState(product)
    }, [product])

    const handleChange = e => {
        setProductState({ ...productState, [e.target.name]: e.target.value })
    }

    const handleEdit = e => {
        e.preventDefault();
        dispatch(editProductAction(productState))
        navigate('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Edit Product
                        </h2>
                        <form onSubmit={handleEdit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name Product" name="name" value={productState.name} onChange={handleChange} />
                                <label>Price</label>
                                <input type="number" className="form-control" placeholder="Price Product" name="price" value={productState.price} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Edit Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
