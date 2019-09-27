import React, { Fragment } from 'react'


import './inb.css'


function Inb(props){
    let { DATA, SHOW_CONVERSATION_MANAGER_MODAL } = props;

    function handleShowMessageConversationModalClick(){
        SHOW_CONVERSATION_MANAGER_MODAL(true)
    }
    return(
        <Fragment>
            {DATA.map((inbData,index)=>{
                return (
                    <div className="Inb" key={'inb'+index}>
                        <img src={inbData.from.imagePath } alt="user_image"/>
                        <div className="Inb_Body">
                            <div className="Inb_body_title">
                                John Doe
                            </div>
                            <div className="Inb_body_content canClick hoverFade" onClick={()=>handleShowMessageConversationModalClick()}>
                            Hello I need a movie when am out from work. HOpe you will be availb
                            </div>
                            <div className="Inb_body_view">
                                <div>
                                    <p className="delete">
                                        <img src="delete/delete.png" className="canClick hoverFade" alt="delete"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ticks">
                                        <img src="ticks/blue_ticks.png" alt="tick"/>
                                    
                                     {/* <i class="fas fa-check">cxc</i> */}
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
        </Fragment>
        
    )
}

export default Inb;