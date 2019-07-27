import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import Folder from './Folder';

 class SingleNote extends Component {
    render() {

        console.log('Running SingleNote component')
        console.log(this.props.notes)
        console.log(this.props.match.params)        
        const notes = this.props.notes.find( (n =>
         n.id === this.props.match.params.noteId   
        ))
        console.log("FOlder QUEST")
        console.log(this.props.root.folders)
        console.log(notes)
        
        let FolderName = this.props.root.find(f =>{
           return  notes.folderId === f.id
        })
           console.log(FolderName)
        
        return (
           <>
            <div>
                <p>{FolderName.name}</p>
            <h3>{notes.name}</h3>
            <p>{notes.modified}</p>
            <button>Delete Note</button>
            <p>{notes.content}</p>
            </div>
           </>
        )
    }
}
export default withRouter(SingleNote);
