import React from 'react'
import './NoteList.css'

//const NoteList = () => 
class NoteList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            notes:[
                    {title: "Kohlrabi welsh", content:"Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."},
                    {title: "Dandelion cucumber", content:"Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."},
                    {title: "Prairie turnip", content: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."}
            ]
        }
    }

    
    render(){
        console.log(this.state.notes)
        return (
            <div className="NoteList">
              <h3>Notes</h3>
              <ul id="notes">
                {/* <a class="active">
                  <li>
                    <div class="note">
                      <div class="note-title">
                        Kohlrabi welsh
                      </div>
                      <div class="note-body">
                        <p>
                          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                        </p>
                      </div>
                    </div>
                  </li>
                </a>
                <a>
                  <li>
                    <div class="note">
                      <div class="note-title">
                        Dandelion cucumber
                      </div>
                      <div class="note-body">
                        <p>
                          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                        </p>
                      </div>
                    </div>
                  </li>
                </a>
                <a>
                  <li>
                    <div class="note">
                      <div class="note-title">
                        Prairie turnip
                      </div>
                      <div class="note-body">
                        <p>
                          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </p>
                      </div>
                    </div>
                  </li>
                </a> */}

                {this.state.notes.map(note =>
                <a key={note.title}>
                  <li>
                    <div className="note">
                      <div className="note-title">
                        {note.title}
                      </div>
                      <div className="note-body">
                        <p>
                            {note.content}
                        </p>
                      </div>
                    </div>
                  </li>
                </a>
                )}
              </ul>
            </div>
        )
    }
}

export default NoteList