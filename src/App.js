import React from "react";
import MenuAppBar from "./components/header";
import AppDrawer from "./components/drawer";
import { Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from '@date-io/moment';
import { theme } from "./styles/theme";
import MainPage from "./components/mainPage";
import Project from "./components/project/project";
import UserForm from "./components/user/userForm";
import TableProjects from "./components/project/tableProjects";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MenuAppBar
            onLeftMenuClick={() => this.setState({ isDrawerOpen: true })}
          />
          <AppDrawer
            open={this.state.isDrawerOpen}
            onToggle={({ isDrawerOpen }) => this.setState({ isDrawerOpen })}
          />

          <Route path="/" textArea exact component={MainPage} />
          <Route path="/user" component={UserForm} />
          <Route exact path="/project" component={Project} />
          <Route path="/project/:id" component={Project} />
          <Route path="/projects" component={TableProjects} />
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}
