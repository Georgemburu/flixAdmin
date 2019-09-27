import React from 'react'

import './you_message.css'

function YouMessage(props){
    let ticks = {
        "sent": "ticks/one_tick.png",
        "received": "ticks/two_ticks.png",
        "read":"ticks/blue_ticks.png"
        }
    let { DATA } = props;

    return (
        <div className="You_Message">
            <div className="You_message_data_div">
                <p>{DATA.text}</p>
                <span className="message_ticks">
                    <img className="chatTicksImg" src={ticks[DATA.status]} alt={JSON.stringify(DATA.status)}/>
                </span>
            </div>
        </div>
    )
}

export default YouMessage;