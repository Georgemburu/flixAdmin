import React from 'react'

import './manageHomeSlider.css'

import Manager from '../../components/containers/manager'
import Table from '../../components/containers/table'

import { connect } from 'react-redux'
import { ADD_HomeSliderImage, GET_HomeSliderImages, DELETE_HomeSliderImage } from '../../redux/actions/index'
class ManageHomeSlider extends React.Component {
    state = {
       imageSliderInfo: {
           imageUrl: '',
           title: ''
       },
       posters: []
    }
    errorDispElem = React.createRef()

    componentDidMount(){
        let { dispatch } = this.props
        GET_HomeSliderImages(dispatch,null,(error,result)=>{
            console.log('from ;ManageHomeSLider.js')
            if(error){
                console.log('error',error)
            }else {
                console.log('succes',result)
                if(result){
                    let { posters } = this.state;
                    let newPosters = []
                    result.forEach((data)=>{
                        let dt = {...data.data()}
                        dt.imagePath = dt.imageUrl;
                        dt.id = data.id;
                        newPosters.push(dt)
                    })
                    this.setState({
                        ...this.state,
                        posters:[...newPosters]
                    })
                }
            }
        })
    }
    handleDelete = ($id)=>{
        let { dispatch } = this.props;
        console.log('delete id',$id)
        if(!$id)return
        DELETE_HomeSliderImage(dispatch,$id, (error,result)=>{
            if(error){
                console.log('error deleting', error)
            }else {
                console.log('success',result)
            }
        })
    }
    handleInputChange = (e)=>{
        let target = e.currentTarget
        console.log(e.currentTarget.name)
        this.setState({
            ...this.state,
            imageSliderInfo: {
                ...this.state.imageSliderInfo,
                [target.name]: target.value
            }
        })
    }
    handleAddBtnClick = (e)=>{

        let {imageUrl,title} = this.state.imageSliderInfo
        if(imageUrl==='' || title===''){
            this.errorDispElem.current.innerText = 'fields cannot be empty'
            
        }else if(imageUrl.startsWith('http')===false){
            this.errorDispElem.current.innerText = 'image url need to be a url link'
            
        }else {
            this.errorDispElem.current.innerText = ''

            console.log('add', this.state.imageSliderInfo)
            // save image
            let dispatch = this.props.dispatch;
            ADD_HomeSliderImage(dispatch,this.state.imageSliderInfo,(error,result)=>{
                if(error){
                    console.log('error saving', error)
                }else {
                    console.log('success saving', result)
                }
            })
        }
        
    }
    render(){
        console.log('props received from map', this.props)
        let { imageSliderInfo, posters } = this.state;
        // let { posters } = this.props;
        return (
            <Manager TITLE="Manage Home Slider">
                <div className="ManageHomeSliderForm">
                    <p className="localInputErrorDisp" ref={this.errorDispElem}></p>
                    <input type="text" name="title" placeholder="Type Image title" value={imageSliderInfo.title} onChange={this.handleInputChange}/>
                    <br />
                    <br />

                    <input type="text" name="imageUrl" placeholder="Type Image url" value={imageSliderInfo.imageUrl} onChange={this.handleInputChange}/>
                    <br />
                    <br />

                    <button onClick={(e)=>this.handleAddBtnClick(e)}>Add</button>
                </div>
                <Table DATA={posters} DELETE_FUNCTION={this.handleDelete}/>

                
            </Manager>    
        )
    }
}

function mapStateToProps(state){
    console.log('state to map',state)
    let { homeSliderImages } = state.homeSliderReducer;
    return {
        posters: homeSliderImages
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageHomeSlider);