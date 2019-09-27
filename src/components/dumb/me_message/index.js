import React from 'react'

import './me_message.css'

// {
//     to: 'Mathw',
//     text: 'Yes. Sure. Which one in particular.Can you send me a list',
//     status: 'read'
// },
function MeMessage(props){
    let ticks = {
        "sent": "ticks/one_tick.png",
        "received": "ticks/two_ticks.png",
        "read":"ticks/blue_ticks.png"
        }
    let { DATA } = props;

    return (
        <div className="Me_Message">
            <div className="Me_message_data_div">
                <p>{DATA.text}</p>
                <span className="message_ticks">
                    <img className="chatTicksImg" src={ticks[DATA.status]} alt={JSON.stringify(DATA.status)}/>
                </span>
            </div>
        </div>
    )
}

export default MeMessage;