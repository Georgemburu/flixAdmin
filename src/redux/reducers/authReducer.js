import { ADMIN_SIGNUP, ADMIN_LOGIN} from '../../action.types'


let initialState = {
    isLoggedIn: true
}


function authReducer(state=initialState,action){
    switch(action.type){
        case ADMIN_LOGIN:
            console.log('login reducer reached')
            // set isloggedin state
            initialState = {
                ...initialState,
                isLoggedIn: true
            }
            // handleRedirectionForLoggedInUser()
            break;
        case ADMIN_SIGNUP:
            console.log('reached signup reducer')
            // set isloggedin state
            initialState = {
                ...initialState,
                isLoggedIn: true
            }
            

            break;
        default: 
            console.log('authReducer default reached')
            initialState = {
                ...initialState,
                isLoggedIn: false
            }
            break;
    }
    return state;
}

export default authReducer;