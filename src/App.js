import React, { Component } from 'react'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
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
          console.log(user)
          this.handleAuth()
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  componentWillUpdate(){
    localStorage.setItem('user', JSON.stringify(this.state.uid))
  }

  handleAuth = () => {
    this.setState({ uid: 'dstrus' })
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
            ? <Main signOut={this.signOut} />
            : <SignIn />
        }

      </div>
    )
  }
}

export default App