import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {    
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
    
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class TableProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    fetch("http://localhost:50317/api/projects/projects")
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (

 
      <Paper className={this.props.root}>
        <Table className={this.props.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Project name</CustomTableCell>
              <CustomTableCell >Description</CustomTableCell>
              <CustomTableCell >Start project date</CustomTableCell>
              <CustomTableCell >End project date</CustomTableCell>
              <CustomTableCell >Project status</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.projects.map(project => {
              return (
                <TableRow className={this.props.project}  key={project.ProjectId}>
                  <CustomTableCell numeric> {project.ProjectName}
                  </CustomTableCell>
                  <CustomTableCell numeric>{project.Description}</CustomTableCell>
                  <CustomTableCell datatype >{project.StartProjectDate}</CustomTableCell>
                  <CustomTableCell datatype>{project.EndProjectDate}</CustomTableCell>
                  <CustomTableCell numeric>{project.ProjectStatus}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TableProjects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableProjects);
