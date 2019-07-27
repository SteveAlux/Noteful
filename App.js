import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import Folder from './Folder';
import Data from './Data';
import Notes from './Notes';
import SingleNote from './singleNote';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      notes: Data.notes,
      folders: Data.folders
    }
  }

  UpdateFolder(name){
    let folders= this.state.folders
    folders.push({
      name:name,
      id:Math.random()
    })
    this.setState({
      folders:folders
  })
}

  render() {
    return (
      <>
      < Header />
    <div className='main_app'>
         
         <article>
         <Route path = '/NotesPage/note/:noteId' 
          render = {() =>{
            
            return (
              <button>
                Go Back
              </button>
            
              )
          }}
          />
           <Route path = '/FolderPage/folder/:folderId'
           render = {() =>{
            return (
              <Folder folders={this.state.folders} updateFolder = {this.UpdateFolder} />
            )
           }}
           />
           
           <Route  exact path = '/'
          render = { () => {
            return (
              < Sidebar />
            )
          }}
        />
        
        
        </article>

        <main>
          <Route path = '/NotesPage/note/:noteId' 
          render = {() =>{
            
            return (
              < SingleNote notes = {Data.notes} root= {Data.folders}/>
            )
          }}
          />
          <Route path = '/FolderPage/folder/:folderId'
          render = { () =>{
           
            return (
              
              < Notes notes = {Data.notes}/>
            )
          }}
           />
          <Route  exact path = '/'
          render = { () => {
            return (
              < Main notes = {Data.notes} />
            )
          }}
        />
       
        </main>
       
      </div>
      </>
    )
  }
}
