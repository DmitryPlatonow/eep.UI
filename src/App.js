import React, { Fragment } from "react";
import MenuAppBar from "./components/header";
import { AppDrawer } from "./components/drawer";
import {Route} from 'react-router-dom';
import Project from './components/project'
import './App.css'

export default class App extends React.Component {
constructor(props){
  super(props)

  this.state ={
    isDrawerOpen: false
  }
}

  render() {
    return (
      <Fragment>
        <MenuAppBar
        onLeftMenuClick={() => this.setState({isDrawerOpen: true})}
        />

        <AppDrawer 
        open = {this.state.isDrawerOpen}
        onToggle = {({isDrawerOpen})=> this.setState({isDrawerOpen})}
        />
    
        
        <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/project' component= {Project} /> 
      </Fragment>
    );
  }
}
