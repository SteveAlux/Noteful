import React, { Component } from 'react'
import Data from './Data';
import {NavLink} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
           <>
            <ul>
                {Data.folders.map(d =>
                    <li key = {d.id}>
                        <h4><NavLink to ={`/FolderPage/folder/${d.id}`}>{d.name}</NavLink></h4>
                        
                </li>)}
            </ul>
            <button>
                Add Folder
            </button>
           </>
        )
    }
}
