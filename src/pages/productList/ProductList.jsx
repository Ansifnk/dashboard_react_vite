
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'


import { Products } from '../../constants/dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './productList.css'


const ProductList = () => {


    const [data, setData] = useState(Products)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 150, renderCell: (params) => <IconRenderCell params={params} /> },
        { field: 'stock', headerName: 'Stock', width: 190 },
        { field: 'status', headerName: 'Status', width: 120, },
        { field: 'price', headerName: 'Price', width: 160, },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => <BtnRenderCell params={params} /> },

    ];

    const IconRenderCell = ({ params }) => {
        return (
            <div className='ProductListItem' ><img className='ProductListImg' src={params.row.avatar} alt="" />
                {params.row.name}
            </div>
        )
    }
    const BtnRenderCell = ({ params }) => {
        return (
            <>
                <Link to={'/products/' + params.row.id} >
                    <button className='productListEdit' >Edit</button>
                </Link>

                <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
            </>
        )
    }

    return (
        <div className='productList' >
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection />

        </div>
    )
}

export default ProductList
