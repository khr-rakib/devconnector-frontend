import React, { useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Landing from './components/Layout/Landing'
import Navbar from './components/Layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/Layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/profile-forms/CreateProfile'
import EditProfile from './components/profile-forms/EditProfile'

// redux
import store from './store'
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'
import AddExperience from './components/profile-forms/AddExperience'
import AddEducation from './components/profile-forms/AddEducation'
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profiles' component={Profiles} />
            <Route path='/profile/:id' component={Profile} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/create/profile' component={CreateProfile} />
            <PrivateRoute path='/edit-profile' component={EditProfile} />
            <PrivateRoute path='/add-experience' component={AddExperience} />
            <PrivateRoute path='/add-education' component={AddEducation} />

          </Switch>
        </section>      
      </Router>
    </Provider>
  )
}

export default App
