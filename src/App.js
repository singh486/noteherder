import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

export class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount() {
    const savedUser = localStorage.getItem('user')
    if(savedUser){
      this.setState({uid: savedUser})
    }
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          //this.setState({uid: user.displayName}) //or getTokenId
          //console.log(this.state.uid)
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  componentWillUpdate(){
    localStorage.setItem('user', JSON.stringify(this.state.uid))
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
  }

  handleUnauth = () => {
    this.setState({ uid: null })
  }

  signOut = () => {
    auth.signOut()
  }

  signedIn = () => {
    return this.state.uid
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/sign-in"
            render={() => (
              this.signedIn()
                ? <Redirect to="/notes" />
                : <SignIn />
            )}
          />
          <Route
            path="/notes"
            render={() => (
              this.signedIn()
                ? <Main signOut={this.signOut} uid={this.state.uid} />
                : <Redirect to="/sign-in" />
            )}
          />
          <Route render={()=>(
              this.signedIn()
              ? <Redirect to="/notes"/>
              : <Redirect to="/sign-in"/>
          )}/>
        </Switch>
        {/*
          this.signedIn()
            ? <Main signOut={this.signOut} uid={this.state.uid} />
            : <SignIn />
        */}

      </div>
    )
  }
}

export default App
