import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
class Notes extends Component {

    render() {
        console.log('Running Notes Component')
        const notelist = this.props.notes.filter( n =>{
           return n.folderId === this.props.match.params.folderId
        })
        return (
            
           <ul>
               {notelist.map( note =>{
                  return( <li>
                    <NavLink to = {`/NotesPage/note/${note.id}`}>
                    <h4>{note.name}</h4>
                    </NavLink>
                    <p>{note.modified}</p>
                   </li>
                  )
               })}
                <button>
          Add Note
        </button>
           </ul>
        )
    }
}
export default withRouter(Notes)
