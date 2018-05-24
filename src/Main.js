import React, { Component } from 'react'
//import firebase from 'firebase/app'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  // componentWillMount(){
  //   localStorage.getItem('notes') 
  //   const noteCopy = JSON.parse(localStorage.getItem('notes'))
  //   if(noteCopy){
  //     this.setState({notes: noteCopy || []})
  //   }

  // }

  // componentWillUpdate(){
  //   localStorage.setItem('notes', JSON.stringify(this.state.notes))
  // }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (note.id) {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    } else {
      // new note
      //this.writeUserData(note)
      note.id = Date.now()
      notes.push(note)
    }

    this.setState({ notes, currentNote: note })
  }

  // writeUserData = (note) =>{
  //   firebase.database().ref('note/' + note.id).set({
  //     title: note.title,
  //     body: note.body,
  //   });
  // }

  render() {
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          resetCurrentNote={this.resetCurrentNote}
        />
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