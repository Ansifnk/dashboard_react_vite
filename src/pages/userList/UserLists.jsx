
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'


import './userLists.css'

import { Users } from '../../constants/dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const UserLists = () => {


    const [data, setData] = useState(Users)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'lastName', headerName: 'User', width: 150, renderCell: (params) => <IconRenderCell params={params} /> },
        { field: 'email', headerName: 'Email', width: 190 },
        { field: 'status', headerName: 'Status', width: 120, },
        { field: 'transaction', headerName: 'Transaction', width: 160, },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => <BtnRenderCell params={params} /> },

    ];

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const IconRenderCell = ({ params }) => {
        return (
            <div className='userLIstUser' ><img className='userListImg' src={params.row.avatar} alt="" />
                {params.row.lastName}
            </div>
        )
    }

    const BtnRenderCell = ({ params }) => {
        return (
            <>
                <Link to={'/user/' + params.row.id} >
                    <button className='userListEdit' >Edit</button>
                </Link>

                <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
            </>
        )
    }

    return (
        <div className='userList' >
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}

export default UserLists
