import { ADD_SERIES, GET_SERIES, DELETE_SERIES } from '../../action.types'

import firebase from '../../config/firebase'
// const firebase_Auth = firebase.auth()
const firebase_Store = firebase.firestore()
const SERIES_DOCNAME  = 'series'


export function ADD_Series($dispatch,$payload,cb=null){
    // save
    let { title,category, imageUrl, trailerUrl, description, casts, galaryImages, type   } = $payload;

    firebase_Store.collection(SERIES_DOCNAME).add({
        title,category, imageUrl, trailerUrl, description, casts, galaryImages, type
    }).then((response)=>{
        cb('',response)
        $dispatch({
            type: ADD_SERIES,
            payload: response
        })
    }).catch((error)=>{
        cb(error,'')
    })
}

export function GET_Series($dispatch,$payload,cb=null){
    return firebase_Store.collection(SERIES_DOCNAME).onSnapshot((snapshot)=>{
        cb('',snapshot)
        $dispatch({
            type: GET_SERIES,
            payload: snapshot
        })
    },(error)=>{
        cb(error,'')
    }
    )

}

export function DELETE_Series($dispatch,$id,cb=null){
    firebase_Store.collection(SERIES_DOCNAME).doc($id).delete().then((response)=>{
        cb('',response)
        $dispatch({
            type: DELETE_SERIES,
            payload: response
        })

    }).catch((error)=>{
        cb(error,'')
    })
}