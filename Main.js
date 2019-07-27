import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Data from './Data';

export default function Main(){
   

        return (
            <ul className = "folder_list">
            {Data.notes.map(note =>
                <li key = {note.id}>
                    <h4><NavLink to ={`/NotesPage/note/${note.id}`}>{note.name}</NavLink></h4>
                    <p>{note.modified}</p>
                </li>)}
                <button>
          Add Note
        </button>
            </ul>
        )
    
}
