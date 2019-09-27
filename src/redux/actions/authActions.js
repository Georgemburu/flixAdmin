import { ADMIN_SIGNUP, ADMIN_LOGIN} from '../../action.types'

import firebase from '../../config/firebase'
const firebase_Auth = firebase.auth()
const firebase_Store = firebase.firestore()
// AUTH
export function SignupAdmin(dispatch,$payload={},cb){
    let requiredFields = ['Firstname','Lastname','Email','Password']
    requiredFields.forEach((fld)=>{
        if($payload[fld]===''|| $payload[fld]===undefined ){
            console.log('empty required field')
        }
    })
    // signup
    firebase_Auth.createUserWithEmailAndPassword($payload.Email,$payload.Password).then((userCredentials)=>{
        // console.log(user)
        if(userCredentials){
            // user created successfully
            console.log(Object.keys(userCredentials))
            let uid = userCredentials.user.uid;

            // save additional information about the user in firestore collection
            // remove email and password from payload object
            delete $payload.Email;
            delete $payload.Password;
            delete $payload.Password2;
            firebase_Store.collection('users').doc(uid).set({
                ...$payload
            }).then((data)=>{
                console.log('saved data',data)
                cb('',userCredentials)
                dispatch( {
                    type: ADMIN_SIGNUP,
                    payload:$payload
                })
            })
        }
       
    }
    ).catch((err)=> cb(err,''))

    
  
}

export function LoginAdmin(dispatch,$payload={},cb){
    let requiredFields = ['Email','Password']
    requiredFields.forEach((fld)=>{
        if($payload[fld]===''|| $payload[fld]===undefined ){
            console.log('empty required field')
        }
    })

    firebase_Auth.signInWithEmailAndPassword($payload.Email,$payload.Password).then((user)=>{
        if(user){
            cb('',user)
            return {
                type: ADMIN_LOGIN,
                payload:$payload
            }
        }else {

        }
    }).catch(error => cb(error,''))
    return {
        type: ADMIN_SIGNUP,
        payload:$payload
    }
}

