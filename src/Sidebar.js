import React from 'react'
//import ReactDOM from 'react-dom'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'


class Sidebar extends React.Component{
    state = {
        newIconHovered: false,
    }

    handleMouseEnter(){
        this.setState({newIconHovered: true})
    }

    handleMouseLeave(){
        this.setState({newIconHovered: false})
    }

    render(){
        return(
            <nav 
                className="Sidebar"
                style = {styles.sidebar}
            >
              <div 
                className="logo"
                style={styles.logo}
              >
                <img 
                    src={quill} 
                    alt="Noteherder"
                    style={styles.logoImg}
                />
              </div>
                <a 
                className="new-note" 
                href="/notes"
                style={styles.newNote}

                onMouseEnter={()=> this.handleMouseEnter()}
                onMouseLeave={()=> this.handleMouseLeave()}
                >
                <img 
                    src={newHover} 
                    alt="New note"
                    style={styles.img}
                />
                <img 
                    className="outline" 
                    src={newIcon} 
                    alt="New note"
                    style={{
                        ...styles.img,
                        opacity: this.state.newIconHovered ? 0 : 1
                    }}
                />
              </a>
              <div 
                className="SignOut"
                style={styles.signOut}
              >
                <button style={styles.signOutButton}>
                  <i style={styles.signOutIfa} className="fa fa-sign-out"></i>
                </button>
              </div>
            </nav>
        )

    }

}


const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '40px',
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008BF8',
        cursor: 'pointer',
    },
    img: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity .25s ease-in-out',
    },
    imgOutline: {
        opacity: '0',
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },
    signOutButton: {
        outline: 'none',
    },
    signOutIfa: {
        fontSize: '2rem',
    }   
}

export default Sidebar