import React from 'react'

const Note = ({note, setCurrentNote})=>{
    return(
        <li 
            className= "Note"
            onClick={()=>setCurrentNote(note)} 
        >
        <div className="note">
          <div className="note-title">
            {note.title}
          </div>
          <div className="note-body" >
            <p className="p" >
                {note.content}
            </p>
          </div>
        </div>
      </li>
    )
}

export default Note