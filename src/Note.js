import React from 'react'

const Note = (props)=>{
    return(
        <li className= "li" >
        <div className="note">
          <div className="note-title">
            {props.note.title}
          </div>
          <div className="note-body" >
            <p className="p" >
                {props.note.content}
            </p>
          </div>
        </div>
      </li>
    )
}

export default Note