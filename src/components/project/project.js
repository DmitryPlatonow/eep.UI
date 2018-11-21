import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { stateProjectList } from "../../store/stateProjectList";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { styles } from "./stylesProject";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ValidatedDatePicker from "./datePicker";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: null,
      projectName: "",
      description: "",
      startProjectDate: "",
      endProjectDate: "",
      projectState: "",
      submitted: false,
      disabled: false
    };
  }

  handleDateStartChange = startProjectDate => {
    this.setState({ startProjectDate });
  };

  handleDateEndChange = endProjectDate => {
    this.setState({ endProjectDate });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
      this.state.projectId === null
        ? this.createProject()
        : this.updateProject();
    });
  };
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
    this.componentDidUpdate();
  };

  componentDidMount() {
    this.props.match.params.id
      ? fetch(
          `http://localhost:50317/api/projects/${this.props.match.params.id}`
        )
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
          )
      : this.setState({ projectId: null });

  }

  render() {
    const { classes } = this.props;
    const {
      projectName,
      description,
      startProjectDate,
      endProjectDate,
      projectState,
      submitted,
      disabled
    } = this.state;

    return (
      <Card className={classes.card}>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
          <CardContent className={classes.cardContent}>
            <TextValidator
              className={classes.textField}
              label="Project Name"
              name="projectName"
              onChange={({ target: { value } }) =>
                this.setState({ projectName: value })
              }
              value={projectName}
              validators={["required"]}
              errorMessages={["this field is required"]}
              margin="normal"
              variant="outlined"
            />
            <TextValidator
              className={classes.textField}
              label="Description"
              name="description"
              onChange={({ target: { value } }) =>
                this.setState({ description: value })
              }
              value={description}
              validators={["required"]}
              errorMessages={["this field is required"]}
              margin="normal"
              variant="outlined"
            />

            <ValidatedDatePicker
              className={classes.textField}
              label="Select start date of project"
              name="startProjectDate"
              onChange={this.handleDateStartChange}
              value={startProjectDate}
              validators={["required"]}
              errorMessages={["date is required"]}
              format="DD/MM/YYYY"
            />
            <ValidatedDatePicker
              className={classes.textField}
              label="Select end date of project"
              name="endProjectDate"
              onChange={this.handleDateEndChange}
              value={endProjectDate}
              validators={["required"]}
              errorMessages={["date is required"]}
              format="DD/MM/YYYY"
            />

            <TextValidator
              className={classes.textField}
              id="select-state"
              select
              label="Project state"
              name="role"
              value={projectState}
              onChange={({ target: { value } }) =>
                this.setState({ projectState: value })
              }
              validators={["required"]}
              errorMessages={["this field is required"]}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
              variant="outlined"
            >
              {stateProjectList.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextValidator>
          </CardContent>
          <CardContent className={classes.tableEmployee} />
          <CardActions className={classes.cardActions}>
            {this.state.projectId !== null ? (
              <Button
                className={classes.button}
                raised="true"
                type="submit"
                variant="contained"
                color="primary"
                disabled={disabled || submitted}
              >
                Update project
              </Button>
            ) : (
              <Button
                className={classes.button}
                raised="true"
                type="submit"
                variant="contained"
                color="primary"
                disabled={disabled || submitted}
              >
                Create project
              </Button>
            )}
          </CardActions>
        </ValidatorForm>
      </Card>
    );
  }
}

export default withStyles(styles)(Project);
