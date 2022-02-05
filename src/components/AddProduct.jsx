import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

//Action Redux
import { addNewProduct } from '../actions/productActions'
import { showAlertAction, hideAlertAction } from '../actions/alertActions'

export default function AddProduct() {

    const navigate = useNavigate();

    const nameRef = useRef()
    const priceRef = useRef()

    const dispatch = useDispatch()

    // Access to the store state
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)
    const alert = useSelector(state => state.alert.alert)

    const addProduct = (product) => dispatch(addNewProduct(product))

    const handleAddProduct = e => {
        e.preventDefault();

        const name = nameRef.current.value
        const price = Number(priceRef.current.value)

        if (name === '' || price === '') {
            const message = {
                msg: 'Required information',
                classes: 'alert alert-danger'
            }

            dispatch(showAlertAction(message))
            return
        }


        dispatch(hideAlertAction())


        //Add new product
        addProduct({ name, price })

        navigate('/')

    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Add New Product
                        </h2>
                        {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
                        <form onSubmit={handleAddProduct}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name Product" name="name" ref={nameRef} />
                                <label>Price</label>
                                <input type="number" className="form-control" placeholder="Price Product" name="price" ref={priceRef} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Add New Product
                            </button>
                        </form>
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
