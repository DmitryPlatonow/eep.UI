import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { rolesList } from "../../store/rolesList";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { styles} from "./stylesForm";
import { theme } from "../../styles/theme";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        role: ""
      },
      submitted: false,
      disabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  createProject = () => {
    if (!this.state.disabled) {
      console.log(this.state.formData);
      fetch("http://localhost:50317/api/accounts/create", {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.state.formData)
      }).then(response => response.json());
    }
  };

  //   componentDidMount() {
  //     fetch(`http://localhost:50317/api/projects/${this.props.match.params.id}`)
  //       .then(res => res.json())
  //       .then(data =>
  //         this.setState({
  //           projectName: data.projectName,
  //           description: data.description,
  //           startProjectDate: data.startProjectDate,
  //           endProjectDate: data.endProjectDate,
  //           projectState: data.projectState
  //         })
  //       );
  //   }

  render() {
    const { classes } = this.props;
    const { formData, submitted, disabled } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
            <CardContent className={classes.cardContent}>
              <TextValidator
                className={classes.textField}
                label="First Name"
                name="firstName"
                onChange={this.handleChange}
                value={formData.firstName}
                validators={["required"]}
                errorMessages={["this field is required"]}
                margin="normal"
                variant="outlined"
              />
              <TextValidator
                className={classes.textField}
                label="Last Name"
                name="lastName"
                onChange={this.handleChange}
                value={formData.lastName}
                validators={["required"]}
                errorMessages={["this field is required"]}
                margin="normal"
                variant="outlined"
              />
              <TextValidator
                className={classes.textField}
                label="Email"
                name="email"
                onChange={this.handleChange}
                value={formData.email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                margin="normal"
                variant="outlined"
              />
              <TextValidator
                className={classes.textField}
                label="Phone Number"
                name="phoneNumber"
                onChange={this.handleChange}
                value={formData.phoneNumber}
                validators={["required"]}
                errorMessages={["this field is required"]}
                margin="normal"
                variant="outlined"
              />
              <TextValidator
                className={classes.textField}
                id="select-role"
                select
                label="User role"
                name="role"
                value={formData.role}
                onChange={this.handleChange}
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
                {rolesList.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextValidator>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                className={classes.button}
                raised="true"
                type="submit"
                variant="contained"
                color="primary"
                disabled={disabled || submitted}
                onClick={this.createProject}
                styles={"green"}
              >
                Add User
              </Button>
            </CardActions>
          </ValidatorForm>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(UserForm);
