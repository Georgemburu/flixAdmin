import { GET_CHATS, SEND_MESSAGE, DELETE_MESSAGE, DELETE_FULL_CHAT } from '../../action.types.js';

/**
 * message => obj
 * => receiver i.e Admin
 * => senderId: id,
 * => status: sent,recieved,read,
 * => text:string,
 * => timeStamp: datetimezone
 */
let initialState = {
    messages: [],
    error: {
        type: null,
        message: null
    }
}


function chatsReducer(state=initialState,action){
    switch(action.type){
        case GET_CHATS:
            return {...action.payload};
            break;
        case SEND_MESSAGE:
            return state;
            break;
        case DELETE_MESSAGE:
            return state;
            break;
        case DELETE_FULL_CHAT:
            return state;
            break;
        default: 
            return state;
            break;
    }
}


export default chatsReducer;