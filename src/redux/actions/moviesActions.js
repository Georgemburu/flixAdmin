import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE } from '../../action.types'

import firebase from '../../config/firebase'
// const firebase_Auth = firebase.auth()
const firebase_Store = firebase.firestore()
const MOVIES_DOCNAME  = 'movies'


export function ADD_Movie($dispatch,$payload,cb=null){
    // save
    let { title,category, imageUrl, trailerUrl, description, casts, galaryImages, type  } = $payload;
    

    firebase_Store.collection(MOVIES_DOCNAME).add({
        title,category, imageUrl, trailerUrl, description, casts, galaryImages, type
    }).then((response)=>{
        cb('',response)
        $dispatch({
            type: ADD_MOVIE,
            payload: response
        })
    }).catch((error)=>{
        cb(error,'')
    })
}

export function GET_Movies($dispatch,$payload,cb=null){
    return firebase_Store.collection(MOVIES_DOCNAME).onSnapshot((snapshot)=>{
        cb('',snapshot)
        $dispatch({
            type: GET_MOVIES,
            payload: snapshot
        })
    },(error)=>{
        cb(error,'')
    }
    )

}

export function DELETE_Movie($dispatch,$id,cb=null){
    firebase_Store.collection(MOVIES_DOCNAME).doc($id).delete().then((response)=>{
        cb('',response)
        $dispatch({
            type: DELETE_MOVIE,
            payload: response
        })

    }).catch((error)=>{
        cb(error,'')
    })
}