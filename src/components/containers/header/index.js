import React, { Fragment } from 'react'
import  { Link, withRouter } from 'react-router-dom'
import './header.css'

function Header (props){
    let state = {
        img: "data:image/png;base64,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",
        bellIcon: "bluebell.png",
        redBell: "redbell.png",
        menuIcon: "menu.png",
        closeIcon: "close.jpeg",
        activePage: props.location.pathname
    }
    let dropdownElem = React.createRef()
    let dropdownElemt = React.createRef()
    // let showingDropdown = false
    let handledrawer_ToggleDropDown = ()=>{
        if(dropdownElemt.current.classList.contains('hide')){
            dropdownElemt.current.classList.remove('hide')
        }else {
            dropdownElemt.current.classList.add('hide') 
        }
    }
    let handleToggleDropDown = ()=>{
        if(dropdownElem.current.classList.contains('hide')){
            dropdownElem.current.classList.remove('hide')
        }else {
            dropdownElem.current.classList.add('hide') 
        }
    }
    let isActive = ($name)=>{
        if(`${$name}`===state.activePage){
            return 'hoverFade active'
        }else {
            return 'hoverFade'
        }
    }
    let drawerElem = React.createRef()
    let handleShowDrawer =()=>{
        drawerElem.current.classList.add('showDrawer')
    }
    let handleHideDrawer =()=>{
        if(dropdownElem.current.classList.contains('hide')===false){
            handleToggleDropDown()
        }
        if(dropdownElemt.current.classList.contains('hide')===false){
            handledrawer_ToggleDropDown()
        }
        drawerElem.current.classList.remove('showDrawer')
        
        
    }
    let handleNavigateToNotifications =()=>{
        props.history.push('/Notifications')
    }
    return(
        <Fragment>
            <header className="Header">
                 
                    <div className="brandSide">
                        <div className="humbergerMenu" >
                            <img src={state.menuIcon} className="humbergerMenu canClick hoverFade" onClick={()=>handleShowDrawer()} alt="menu icon"/>
                        </div>
                        <p className="brandName">MIRTH<sub className="small_f">movies</sub></p>
                        
                    </div>
                    <div className="navSide">
                        <Link to="/okHome" className={isActive('/okHome')}>Home</Link>
                        <Link to="/ManageMovies" className={isActive('/ManageMovies')}>Manage Movies</Link>
                        <Link to="/ManageSeries" className={isActive('/ManageSeries')}>Manage Series</Link>
                        <Link to="/ManageNewMovies" className={isActive('/ManageNewMovies')}>Manage New Movies</Link>
                        <Link to="/ManageUsers" className={isActive('/ManageUsers')}>Manage Users</Link>

                    </div>
                    <div className="usersControlSide">
                        {/* <img src={state.bellIcon} className="notification_bellIcon canClick hoverFade"/> */}
                        <img src={state.redBell} className="admindp canClick hoverFade" alt="notification icon" onClick={()=> handleNavigateToNotifications()}/>

                        <p className="controlsDropDown canClick hoverFade" onClick={()=>handleToggleDropDown()}>Admin</p>
                        <img src={state.img} className="admindp" alt="dp"/>

                        <div className="controlsDropDownDiv hide" ref={dropdownElem}>
                            <Link to="/Login"  className={isActive('/Login')}>Login</Link>
                            <Link to="/History"  className={isActive('/History')}>History</Link>
                            <Link to="/Inbox"  className={isActive('/Inbox')}>Inbox</Link>
                            <Link to="/Compose"  className={isActive('/Compose')}>Compose</Link>
                            <Link to="/Logout"  className={isActive('/Logout')}>Logout</Link>

                        </div>
                    </div>
            
            </header>
            <div className="sideNavDrawer" ref={drawerElem}>
               <div className="sideNavDrawer_Header">
                    <img src={state.closeIcon} className="drawer_closeIcon canClick hoverFade" onClick={()=>handleHideDrawer()} alt="close icon"/>
               </div>
               <div className="sideDrawer_usersControlSide relative">
                        {/* <img src={state.bellIcon} className="notification_bellIcon canClick hoverFade"/> */}
                        <img src={state.redBell} className="admindp absolute canClick hoverFade" alt="notification icon" onClick={()=> handleNavigateToNotifications()}/>
                        <div className="ml-9 absolute">
                            <img src={state.img} className="admindp" alt="dp"/>
                            <p className="controlsDropDown canClick hoverFade" onClick={()=>handledrawer_ToggleDropDown()}>Admin</p>
                        </div>
                        

                        <div className="controlsDropDownDiv hide drawer_controlsDropDownDiv" ref={dropdownElemt}>
                            <Link to="/Login"  className={isActive('/Login')}>Login</Link>
                            <Link to="/History"  className={isActive('/History')}>History</Link>
                            <Link to="/Inbox"  className={isActive('/Inbox')}>Inbox</Link>
                            <Link to="/Compose"  className={isActive('/Compose')}>Compose</Link>
                            <Link to="/Logout"  className={isActive('/Logout')}>Logout</Link>

                        </div>
                </div>
                 
                <div className="drawer_navSide">
                    <Link to="/okHome" className={isActive('/okHome')}>Home</Link>
                    <Link to="/ManageMovies" className={isActive('/ManageMovies')}>Manage Movies</Link>
                    <Link to="/ManageSeries" className={isActive('/ManageSeries')}>Manage Series</Link>
                    <Link to="/ManageNewMovies" className={isActive('/ManageNewMovies')}>Manage New Movies</Link>                    
                    <Link to="/ManageUsers" className={isActive('/ManageUsers')}>Manage Users</Link>

                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Header);