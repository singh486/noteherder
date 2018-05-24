import React from 'react'

import './NoteForm.css'

const NoteForm = ({ notes, currentNote, saveNote, resetCurrentNote }) => {
  const handleChanges = (ev) => {
    const note = {...currentNote}
    note[ev.target.name] = ev.target.value
    saveNote(note)
  }

  const deleteNote = (ev) =>{
    const index = notes.indexOf(currentNote)
    if(index > -1){
      notes.splice(index,1)
    }
    resetCurrentNote()
  }

  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button" onClick={deleteNote}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={currentNote.title}
            onChange={handleChanges}
          />
        </p>

        <textarea
          name="body"
          value={currentNote.body}
          onChange={handleChanges}
        ></textarea>
      </form>
    </div>
  )
}

export default NoteForm