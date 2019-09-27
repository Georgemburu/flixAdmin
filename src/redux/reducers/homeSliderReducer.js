import { ADD_HOME_SLIDER_IMAGE, GET_HOME_SLIDER_IMAGES, DELETE_HOME_SLIDER_IMAGE} from '../../action.types'

const initialState = {
    homeSliderImages : [
        {
            id: 1,
            imagePath: 'moviePoster/1.jpeg',
            title: 'title'
        },
        {
            id: 2,
            imagePath: 'moviePoster/2.jpeg',
            title: 'title'
        },
        {
            id: 3,
            imagePath: 'moviePoster/3.jpeg',
            title: 'title'
        },
        {
            id: 4,
            imagePath: 'moviePoster/4.jpeg',
            title: 'title'
        }
    ],

}
function homeSliderReducer(state=initialState,action){
    switch(action.type){
        case ADD_HOME_SLIDER_IMAGE:
            console.log('reached add home slider reducer')
            return state
            break;
        case GET_HOME_SLIDER_IMAGES:
            console.log('reached get home slider images')
            let PosterData = []
            action.payload.forEach((data)=>{
                let dt = {...data.data()}
                dt.id = data.id
                dt.imagePath = data.imageUrl
                PosterData.push(dt)
            })
            initialState.homeSliderImages = [...PosterData];
            let posters = initialState.homeSliderImages
            return {
                posters
            }
            break;
        case DELETE_HOME_SLIDER_IMAGE:
            console.log('reached delete home slider image')
            return state


            break;
        default:
            return state;
            break;
        
    }
}


export default homeSliderReducer;