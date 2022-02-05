import React from 'react';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

//Redux
import { useDispatch } from 'react-redux';

import { deleteProduct, editProduct } from '../actions/productActions'

export default function Product({ product }) {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleDeleteProduct = async (id) => {

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

        if (result.isConfirmed) {
            dispatch(deleteProduct(id))
        } else {
            Swal.fire(
                'Cancelled!',
                'Action Cancelled',
                'success'
            )
        }

    }

    const redirectEdit = product => {
        dispatch(editProduct(product))
        navigate(`/product/edit/${product.id}`)
    }

    return (
        <tr className="text-center">
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td className="acciones">
                <button onClick={() => redirectEdit(product)} className="btn btn-primary mr-2"> Editar </button>
                <button className="btn btn-danger" type="button" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
            </td>
        </tr>
    );
}
