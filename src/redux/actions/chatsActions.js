import { GET_CHATS, SEND_MESSAGE, DELETE_MESSAGE, DELETE_FULL_CHAT } from '../../action.types.js';
import firebase from '../../config/firebase';

import toDateTime from '../../utils/toDateTime';

/**
 * message => obj
 * => receiver i.e Admin
 * => senderId: id,
 * => status: sent,recieved,read,
 * => text:string,
 * => timeStamp: datetimezone
 */
const messagesCollectionDoc = 'chatWithAdmin'; //then doc with user id //then
const messagesSubCollectionDoc = 'WITH_ADMIN';//then doc with auto gen id with do details 


// listener

 export function GET_Chats(dispatch=null,payload=null){
    //  return firebase.firestore().collection(messagesCollectionDoc).get().then((querySnapshot)=>{
      firebase.firestore().collection(messagesCollectionDoc).onSnapshot((querySnapshot)=>{
        // console.log('CHAT SNAPSHOT',querySnapshot)
        let messagesArr  = []
        querySnapshot.forEach(function(doc) {
            // console.log(doc.id, " => ", doc.data());
            let docObj = {};
            let data = doc.data();

            docObj.from = {
              id:doc.id,
              name:null,
              imagePath:null,
              sentTime:null
            };
            firebase.firestore().collection(messagesCollectionDoc).doc(doc.id).collection('messages').onSnapshot((qsnapshot)=>{
              let msgs=[]
              qsnapshot.forEach(function(docc){
                // console.log('HEREMEE',docc.id,docc.data())
                // docObj = {...docObj,...data};
                // {
                  //                   sentTime: '09/09/122922.22',
                  //                   receivedTime: '02923/343/3434',
                  //                   status: 'read',
                  //                   text: 'Hello I need a movie when am out from work. HOpe you will be availb'
                  //               }
                msgs.push({
                  id:docc.id,
                  sentTime: toDateTime(docc.data().timeStamp.seconds),
                  receivedTime: null,
                  ...docc.data()
                })

              })
              let indexByLen = msgs.length>0?Number(msgs.length)-Number(1):null;

              docObj.sentTime = indexByLen!=null?msgs[indexByLen].sentTime.toString():null;
              docObj.messages = msgs
            // docObj.from.sentTime = msgs.length>0?msgs[-1].sentTime:null;

              // messagesArr.push(docObj);

            })

            // docObj.from.sentTime = msgs.length>0?msgs[-1].sentTime:null;
           
            messagesArr.push(docObj);

          });
        //   dispatch
        // setTimeout(()=>{
            dispatch({
              type: GET_CHATS,
              payload: {
                  messages: [...messagesArr],
                  error: {
                      type: null,
                      message: null
                  }
              }
          })
        // },0)
        // dispatch({
        //     type: GET_CHATS,
        //     payload: {
        //         messages: [...messagesArr],
        //         error: {
        //             type: null,
        //             message: null
        //         }
        //     }
        // })
     })
    //  messages : {
    //   'Today': [
    //       {
    //           from: {
    //               id: 'ewewewewewewe',
    //               name: 'Jane Doe',
    //               imagePath: 'data:image/jpeg;base64,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'
    //           },
    //           messages: [
    //               {
    //                   sentTime: '09/09/122922.22',
    //                   receivedTime: '02923/343/3434',
    //                   status: 'read',
    //                   text: 'Hello I need a movie when am out from work. HOpe you will be availb'
    //               }
    //           ]

    //       },
    //  .catch((error)=>{
    //      console.log('ERROR querying messages',error)
    //      dispatch({
    //         type: GET_CHATS,
    //         payload:{
    //             messages: [],
    //             error: {
    //                 type: 'error getting messages',
    //                 message: 'Error getting messages from server'
    //             }
    //         }
    //      })
    //  })
 }

 // new edit 

//  export function GET_Chats(dispatch=null,payload=null){
//   //  return firebase.firestore().collection(messagesCollectionDoc).get().then((querySnapshot)=>{
//     firebase.firestore().collection(messagesCollectionDoc).get().then((querySnapshot)=>{
//         querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} => ${doc.data()}`);
//         });

//     }).catch((error)=>{
//       console.log('ERROR GETTING CHATWITH  ADMIN')
//     })

// }
