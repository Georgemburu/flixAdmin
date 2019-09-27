import React, { Fragment } from 'react'

import './table.css'

function Table(props){
    let { DATA, DELETE_FUNCTION } = props;
    console.log(DATA)

    const handleDelete = ($id)=>{
        DELETE_FUNCTION($id)
    }
    const handleDataListing = (data)=>{
        return (
            <Fragment>
                {data.map((dt,index)=>{
                    return(
                    <tr key={dt.id} data_key={dt.id}>
                        <td>{index+1}</td>
                        <td>
                            <img src={dt.imagePath} alt="user_image" className="formImage"/>
                        </td>
                        <td>edit</td>
                        <td className="canClick hoverFade" onClick={(e)=>handleDelete(dt.id)}>delete</td>
                    </tr>
                    )
                })}
            </Fragment>
            
        )
    }
    return (
        <table className="Form">
            <thead>
                <tr>
                    <th>#</th>
                    <th>List</th>
                    <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                { handleDataListing(DATA)}
            </tbody>
        </table>
    )
}

export default Table;