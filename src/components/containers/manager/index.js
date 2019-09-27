import React from 'react'

import './manager.css'

function Manager (props){
    let { TITLE } = props
    return (
        <div className="Manager">
            <div className="Manage_Title"> { TITLE }</div>
            <div className="manager_outer">
                {props.children}
            </div>
        </div>
    )
}

export default Manager;