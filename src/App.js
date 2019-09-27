import React from 'react';

import './App.css'

import Routes  from './routes'

import Header from './components/containers/header'
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  renderHeader =()=>(
    this.props.location.pathname==='/'? '':<Header />
  )
  render(){
    return(
        <div className="App">
          {this.renderHeader()}
          <main>
            <Routes />
          </main>
        </div>
      
    )
  }
}

export default withRouter(App);