import React from 'react'

import './manageUsers.css'

import Manager from '../../components/containers/manager'
import Table from '../../components/containers/table'

class ManageUsers extends React.Component {
    state = {
        posters : [
            {
                imagePath: 'moviePoster/1.jpeg',
                title: 'title'
            },
            {
                imagePath: 'moviePoster/2.jpeg',
                title: 'title'
            },
            {
                imagePath: 'moviePoster/3.jpeg',
                title: 'title'
            },
            {
                imagePath: 'moviePoster/4.jpeg',
                title: 'title'
            }
        ]
    }

    render(){
        let { posters } = this.state;
        return (
            <Manager TITLE="Manage Users ">
                <div className="ManageHomeSliderForm">
                    <input type="text" placeholder="Type Name to serarch"/>
                    <br/>
                    <br/>
                  
                    <button>Search</button>
                </div>
                <Table DATA={posters}/>

                
            </Manager>    
        )
    }
}


export default ManageUsers;