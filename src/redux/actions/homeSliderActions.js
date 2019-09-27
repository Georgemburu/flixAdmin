import { ADD_HOME_SLIDER_IMAGE, GET_HOME_SLIDER_IMAGES, DELETE_HOME_SLIDER_IMAGE} from '../../action.types'


import firebase from '../../config/firebase'
// const firebase_Auth = firebase.auth()
const firebase_Store = firebase.firestore()
const IMAGE_SLIDER_DOCNAME  = 'homeSliderImages'


export function ADD_HomeSliderImage($dispatch,$payload,cb=null){
    // access the homeSliders collection and add url string
    firebase_Store.collection(IMAGE_SLIDER_DOCNAME).add({
        imageUrl: $payload.imageUrl,
        title: $payload.title
    }).then((response)=>{
        console.log(response)
        cb('',response)
        $dispatch({
            type: ADD_HOME_SLIDER_IMAGE,
            payload: response
        })
    }).catch((error)=>{
        console.log(error)
        cb(error,'')

    })
}

export function GET_HomeSliderImages($dispatch,$payload,cb=null){
   return firebase_Store.collection(IMAGE_SLIDER_DOCNAME).onSnapshot((snapshot)=>{
        // snapshot.forEach((data)=>{
        //     console.log('de',data.data())
        // })
        // console.log('gotten data', snapshot.docs)

        cb('',snapshot)
        $dispatch({
            type: GET_HOME_SLIDER_IMAGES,
            payload: snapshot
        })
    },error =>{
        console.log('error getting data',error)
    })
}

export function DELETE_HomeSliderImage($dispatch,$id,cb){
    firebase_Store.collection(IMAGE_SLIDER_DOCNAME).doc($id).delete().then(()=>{
        cb('','Deleted successfully')
    }).catch((error)=>{
        cb(error,'')
    })
}