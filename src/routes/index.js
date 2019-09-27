import React from 'react'
import {  Switch, Route } from 'react-router-dom'

// import the pages
import Home from '../pages/home/Home'
import ManageHomeSlider from '../pages/manage_home_slider/ManageHomeSlider'
import ManageMovieCategories from '../pages/manage_movie_categories/ManageMovieCategories'
import ManageMovies from '../pages/manage_movies/ManageMovies'
import ManageUsers from '../pages/manage_users/ManageUsers'
import Notifications from '../pages/notifications/Notifications'
import Inbox from '../pages/inbox/Inbox'
import History from '../pages/history/History'
import Compose from '../pages/compose/Compose'

import NotFound from '../pages/not_found/NotFound'


import AuthPage from '../authPage'

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/okHome" component={Home} />
            <Route  path="/ManageHomeSlider" component={ManageHomeSlider} />
            <Route  path="/ManageMovieCategories" component={ManageMovieCategories} />
            <Route  path="/ManageMovies" component={ManageMovies} />
            <Route  path="/ManageUsers" component={ManageUsers} />
            <Route  path="/Notifications" component={Notifications} />
            <Route  path="/Inbox" component={Inbox} />
            <Route  path="/History" component={History} />
            <Route  path="/Compose" component={Compose} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes;