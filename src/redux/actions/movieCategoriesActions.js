import  { ADD_MOVIE_CATEGORY, GET_MOVIE_CATEGORIES, DELETE_MOVIE_CATEGORY } from '../../action.types'

import firebase from '../../config/firebase'
// const firebase_Auth = firebase.auth()
const firebase_Store = firebase.firestore()
const MOVIE_CATEGORIES_DOCNAME  = 'movieCategories'

export function ADD_Movie_Category($dispatch,$payload,cb=null){
    firebase_Store.collection(MOVIE_CATEGORIES_DOCNAME).add({
        category: $payload.category,
        imageUrl: $payload.imageUrl
    }).then((result)=>{
        cb('',result)
        $dispatch({
            type: ADD_MOVIE_CATEGORY,
            payload: result
        })
    }).catch((error)=>{
        cb(error,'')
    })

}

export function GET_Movie_Categories($dispatch,$payload=null,cb=null){
    firebase_Store.collection(MOVIE_CATEGORIES_DOCNAME).onSnapshot((snapshot)=>{
        cb('',snapshot)
        $dispatch({
            type: GET_MOVIE_CATEGORIES,
            payload: snapshot
        })
    },(error)=>{
        cb(error,'')
    }
    )
}

export function DELETE_Movie_Category($dispatch,$id,cb=null){
    firebase_Store.collection(MOVIE_CATEGORIES_DOCNAME).doc($id).delete().then((response)=>{
        cb('',response)
        $dispatch({
            type: DELETE_MOVIE_CATEGORY,
            payload: response
        })

    }).catch((error)=>{
        cb(error,'')
    })
}