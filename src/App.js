import React, { Component } from 'react'

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
        {
          this.signedIn()
            ? <Main signOut={this.signOut} uid = {this.state.uid} />
            : <SignIn />
        }

      </div>
    )
  }
}

export default App
