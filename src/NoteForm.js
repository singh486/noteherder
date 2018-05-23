import React from 'react'
import './NoteForm.css'


export const NoteForm = (title) => {
//export class NoteForm extends React.Component{
    console.log(title)
    if(Object.keys(title).length == 0){
        console.log("empty")
        title = ""
    }
        return (
            <div className="NoteForm">
              <div className="form-actions">
                <button type="button">
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
              <form>
                <p>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title your note"
                  />
                </p>

                <textarea name="body"></textarea>
              </form>
            </div>
        )

    
    //render(){
        //const title = {name: "lol", content: "lol"}

    //}
}

export default NoteForm