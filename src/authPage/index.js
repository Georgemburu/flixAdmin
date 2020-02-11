import React from  'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './authpage.css'
// import auth actions
import { LoginAdmin, SignupAdmin } from '../redux/actions'
class AuthPage extends React.Component {
    constructor(props){
        super(props)
        console.log('this.props',this.props)
    }
    state = {
        signupDetails: {
            Firstname: '',
            Lastname: '',
            Email: '',
            Password:'',
            Password2: ''
        },
        isLoggedIn: false
    }
    loginDetails = {
        Email: this.state.signupDetails.Email,
        Password: this.state.signupDetails.Password
    }
    authformErrorRevealer = React.createRef()

   

    handleSignup =(e)=>{
        e.preventDefault()
        console.log('clicked signup')
        let signupKys = Object.keys(this.state.signupDetails)
        let foundEmpty = false;
        signupKys.forEach((ky)=>{
            if(this.state.signupDetails[ky]===''){
                foundEmpty=true
            }
        })
        if(foundEmpty===true){
            // show error
            this.authformErrorRevealer.current.innerText = '*Error: Fields Cannot be empty'
            // console.log(this.authformErrorRevealer)
        }else {
            // submit
            this.authformErrorRevealer.current.innerText = ''
            let { dispatch } = this.props;
            let payload = {
                ...this.state.signupDetails
            }
            SignupAdmin(dispatch,payload,(err,user)=>{
                if(err){
                    console.log('error',err)
                    this.authformErrorRevealer.innerText = 'error creating user'
                }else {
                    console.log('succ user',user)
                    this.authformErrorRevealer.current.innerText = 'user created successfully'

                    this.setState({
                        ...this.state,
                        isLoggedIn: true
                    })
                }
            })

        }

    }
    handleLogin =(e)=>{
        e.preventDefault()
        
        let loginKys = Object.keys(this.loginDetails)
        let foundEmpty = false;
        loginKys.forEach((ky)=>{
            if(this.state.signupDetails[ky]===''){
                foundEmpty=true
            }
        })
        if(foundEmpty===true){
            // show error
            this.authformErrorRevealer.current.current.innerText = '*Error: Fields Cannot be empty'
            // console.log(this.authformErrorRevealer)
        }else {
            // submit
            this.authformErrorRevealer.current.innerText = ''
            let { dispatch } = this.props;
            let payload = {
               Email:  this.state.signupDetails['Email'],
               Password: this.state.signupDetails['Password']
            }
           
            LoginAdmin(dispatch,payload,(err,user)=>{
                if(err){
                    console.log('error',err)
                    if(this.authformErrorRevealer.current && this.authformErrorRevealer.current!==undefined){
                        this.authformErrorRevealer.current.innerText = 'invalid email or password'
                    }
                }else {
                    console.log('succ user',user)
                    this.authformErrorRevealer.current.innerText = 'successfull login'

                    this.setState({
                        ...this.state,
                        isLoggedIn: true
                    })
                }
            })


        }
        
    }
    
    handleInputChange =(e)=>{
        // console.log(e.currentTarget.name)
        let preState = {
            ...this.state
        }
        preState.signupDetails[e.currentTarget.name]=e.currentTarget.value
        this.setState({
           ...preState
            
        })
        // console.log(this.state)
    }
  
    render(){
        if(this.state.isLoggedIn===true){
            // redirect;
            return (
                <Redirect to='okHome'/>
            )
        }
        let { Firstname, Lastname, Email, Password, Password2 } = this.state.signupDetails;
        return (
            <div className="AuthPage">
                <form className="authPage_form" method="POST">
                    <span id="authformErrorRevealer" ref={this.authformErrorRevealer}></span>
                    <div>
                        <label>Firstname</label>
                        <input type="text" placeholder="firstname" name="Firstname" value={Firstname} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div>
                        <label>Lastname</label>
                        <input type="text" placeholder="lastename" name="Lastname" value={Lastname} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="email@mail.com" name="Email" value={Email} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="password" name="Password" value={Password} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div>
                        <label>Retype Password</label>
                        <input tyoe="password" placeholder="" name="Password2" value={Password2} onChange={(e)=>this.handleInputChange(e)}/>
                    </div>
                    <div className="authpage_buttons_div">
                        <button onClick={(e)=>this.handleSignup(e)}>Signup</button>
                        <button onClick={(e)=> this.handleLogin(e)}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('statetoprops',state)
    // return state
    return {
        isLoggedIn: state.authReducer.isLoggedIn
    }
}
function mapDispatchToProps(dispatch){
    console.log('dispatch',dispatch)

    // return dispatch;
    return {
        dispatch
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(AuthPage);