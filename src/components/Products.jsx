import { useEffect } from 'react';

//Action Redux
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../actions/productActions'

import Product from './Product'

export default function Productos() {

  const dispatch = useDispatch()

  useEffect(() => {
    const loadingProducts = () => dispatch(getProducts())
    loadingProducts()
    //eslint-disable-next-line
  }, [])

  const products = useSelector(state => state.products.products)
  const error = useSelector(state => state.products.error)
  const loading = useSelector(state => state.products.loading)

  return (
    <>
      <h2 className="text-center my-5">List of Products</h2>
      {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Error</p> : null}
      {loading ? <p className="text-center mt-4">Loading...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark text-center ">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ?
            'No hay products available' :
            products.map(product => (
              <Product product={product}  key={product.id}/>
            ))}
        </tbody>
      </table>
    </>
  )
}
