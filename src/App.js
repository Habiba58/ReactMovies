import React, { Component } from 'react'
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import Tv from './components/Tv/Tv'
import Movies from './components/Movies/Movies'
import NotFound from './components/NotFound/NotFound'
import { Route, Redirect, Switch } from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Protectedroutes from './components/Protectedroutes/Protectedroutes'
export default class App extends Component {
  //for authenticatio
  /*
     <Protectedroutes path='/home' component={Home} />
     instead of home route
  */
  render() {
    return (
      <>
      
      <Navbar/>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/movies' component={Movies} />
          <Route path='/tv' component={Tv} />
          <Redirect exact from='/' to='/register' />
          <Route path='*' component={NotFound} />
        </Switch>
      </>
    )
  }
}
