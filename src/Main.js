
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import base from './base'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  componentWillMount() {
    base.syncState(`notes/${this.props.uid}`, {
      context: this,
      state: 'notes',
      asArray: true,
    })

  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
      updatedAt: new Date().toString(),
    }
  }

  saveNote = (note) => {
    let shouldRedirect = false
    const notes = [...this.state.notes]

    if (note.id) {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      note.updatedAt = new Date().toString()
      notes[i] = note
    } else {
      // new note
      note.id = Date.now()
      note.updatedAt = new Date().toString()
      notes.push(note)
      shouldRedirect = true
    }

    this.setState(
      { notes },
      () => {
        if (shouldRedirect) {
          this.props.history.push(`/notes/${note.id}`)
        }
      }
    )

  }

  removeNote = (currentNote) => {
    const notes = [...this.state.notes]
    const i = notes.findIndex(note => note.id === currentNote.id)

    if (i > -1) {
      notes.splice(i, 1)
      this.setState({ notes })
      this.props.history.push('/notes')
    }
  }

  render() {
    for(var i=0; i<this.state.notes.length; i++){
      for(var j=0; j<this.state.notes.length - 1; j++){
          if(this.state.notes[j].updatedAt < this.state.notes[j+1].updatedAt){
              var temp = this.state.notes[j]
              this.state.notes[j] = this.state.notes[j+1]
              this.state.notes[j+1] = temp
          }
      }
    }    
    //console.log(this.state.notes)

    const formProps = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      notes: this.state.notes,
    }

    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar signOut={this.props.signOut} />
        <NoteList notes={this.state.notes} />
        <Switch>
          <Route
            path="/notes/:id"
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
          <Route
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
        </Switch>


      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main