import { ADD_NEW_MOVIE, GET_NEW_MOVIES, DELETE_NEW_MOVIE } from '../../action.types';

import firebase from '../../config/firebase';
const firebase_Store = firebase.firestore()
const NEW_MOVIES_COLLECTION_NAME = 'newMovies';


export function ADD_NewMovie($dispatch,$payload,cb=null){
    // save
    let { title,category, imageUrl, trailerUrl, description, casts, galaryImages, type  } = $payload;
    

    firebase_Store.collection(NEW_MOVIES_COLLECTION_NAME).add({
        title,category, imageUrl, trailerUrl, description, casts, galaryImages, type
    }).then((response)=>{
        cb('',response)
        $dispatch({
            type: ADD_NEW_MOVIE,
            payload: response
        })
    }).catch((error)=>{
        cb(error,'')
    })
}

export function GET_NewMovies($dispatch,$payload,cb=null){
    return firebase_Store.collection(NEW_MOVIES_COLLECTION_NAME).onSnapshot((snapshot)=>{
        cb('',snapshot)
        $dispatch({
            type: GET_NEW_MOVIES,
            payload: snapshot
        })
    },(error)=>{
        cb(error,'')
    }
    )

}

export function DELETE_NewMovie($dispatch,$id,cb=null){
    firebase_Store.collection(NEW_MOVIES_COLLECTION_NAME).doc($id).delete().then((response)=>{
        cb('',response)
        $dispatch({
            type: DELETE_NEW_MOVIE,
            payload: response
        })

    }).catch((error)=>{
        cb(error,'')
    })
}