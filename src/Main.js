import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component{

    constructor(){
       super()
       
       this.state={
            currentNote: {
                id:null,
                title:"",
                content:"",
            },
            notes: [
                {id: 1, title: "Kohlrabi welsh", content:"Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."},
                {id: 2, title: "Dandelion cucumber", content:"Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."},
                {id: 3, title: "Prairie turnip", content: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip."},
    
            ]
       }
    }

    setCurrentNote= (note)=>{
        this.setState({currentNote: note})
    }

    render(){
        return(
            <div 
                className = "Main"
                style={style}
            >
                <Sidebar />
                <NoteList 
                    notes = {this.state.notes}
                    setCurrentNote = {this.setCurrentNote}
                />
                <NoteForm currentNote={this.state.currentNote}/>
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