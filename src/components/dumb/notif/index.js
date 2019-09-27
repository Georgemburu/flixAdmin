import React, { Fragment } from 'react'

import './notif.css'

function Notif(props){
    let { DATA, SHOW_CONVERSATION_MANAGER_MODAL } = props;

    function handleShowMessageConversationModalClick(){
        SHOW_CONVERSATION_MANAGER_MODAL(true)
    }
    return (
        <Fragment>
        {DATA.map((notif,index)=>{
            return(
                <div key={'notif'+index} className="Notification_div">
                        <img src={notif.from.imagePath} alt="user_image"/>
                        <div className="notif_Body">
                            <div className="notif_body_main">
                                <div className="notif_body_title">
                                    Movie Order
                                </div>
                                <div className="notif_body_content">
                                    Quantity:2
                                </div>
                            </div>
                            
                            <div className="notif_body_others">
                                <div className="notif_body_total_display">
                                    Total: 100
                                </div>
                                <div className="notif_body_view_button_div">
                                    <p onClick={()=>handleShowMessageConversationModalClick()}>View</p>
                                </div>
                            </div>
                            
                        </div>
                </div>
            )
        })}
    </Fragment>
    )
}


export default Notif;