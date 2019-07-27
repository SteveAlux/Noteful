import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

 class Folder extends Component {
     updateFolder(){
         console.log(document.getElementById('foldername'))
        let name = document.getElementById('foldername').value
        this.props.updateFolder(name);
     }
    render() {
        console.log(this.props.folders)
        console.log(this.props)
        let data = this.props.folders;
        let folder = this.props.match.params.folderId;    
        return (
            <>
            <ul className = "folder_list">
            {data.map(d =>
                <li key = {d.id}>
                    <h4><NavLink to ={`/FolderPage/folder/${d.id}`}>{d.name}</NavLink></h4>
                    
                </li>)}
            </ul>
            <input type='text' id='foldername'/>
            <button onClick = {this.updateFolder()}>
            Add Folder
        </button>
        </>
        )
    }
}
export default withRouter(Folder);
