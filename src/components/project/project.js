import React, { Component } from "react";
import {
  Button,
  FormControlLabel,
  TextField,
  Checkbox
} from "@material-ui/core";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
      projectName: "",
      description: "",
      startProjectDate: null,
      endProjectDate: null,
      projectState: false
    };
  }

  createProject = () => {
    console.log(this.state);
    fetch("http://localhost:50317/api/projects/create", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json());
    // .then(r => console.log('--response', r))
  };

  updateProject = () => {
    console.log(this.state);
    fetch(`http://localhost:50317/api/projects`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json());
    // .then(r => console.log('--response', r))
  };
  componentDidMount() {
    fetch(`http://localhost:50317/api/projects/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          projectId: this.props.match.params.id,
          projectName: data.projectName,
          description: data.description,
          startProjectDate: data.startProjectDate,
          endProjectDate: data.endProjectDate,
          projectState: data.projectState
        })
      );
  }

  render() {
    const {
      projectName,
      description,
      startProjectDate,
      endProjectDate,
      projectState
    } = this.state;

    console.log("-----props", this.props.endProjectDate);

    return (
      <div className="App">
        <div className="create-project-form">
          <TextField
            value={projectName}
            label="Project Name"
            onChange={({ target: { value } }) =>
              this.setState({ projectName: value })
            } // = { target: { value } } = event.target.value
          />
          <TextField
            value={description}
            label="Description"
            onChange={({ target: { value } }) =>
              this.setState({ description: value })
            }
          />
          <TextField
            label="Select start date of project"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={startProjectDate}
            onChange={event =>
              this.setState({ startProjectDate: event.target.value })
            }
          />
          <TextField
            label="Select end date of project "
            type="date"
            InputLabelProps={{ shrink: true }}
            value={endProjectDate}
            onChange={event =>
              this.setState({ endProjectDate: event.target.value })
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                value={projectState}
                onChange={event =>
                  this.setState({ projectState: event.target.checked })
                }
              />
            }
            label="Is project closed?"
          />
          {this.props.match.params.id !== null  
          ? (
            <Button onClick={this.updateProject}>Update Project</Button>
            
          ) 
          : (
            <Button onClick={this.createProject}>Add Project</Button>
          )}
        </div>
      </div>
    );
  }
}

export default Project;
