import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { TableToolbar } from "./tableToolbar";
import ProjectTableHead from "./projectTableHead";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
      selected: [],
      data: []
    };
  }
  

  handleClick = (event, projectId) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(projectId);   
 
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, projectId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  componentDidMount() {
    fetch("http://localhost:50317/api/projects")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  onDeleteClick = () => {
    console.log(this.state.selected[0]);
    fetch(`http://localhost:50317/api/projects/${this.state.selected[0]}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state.projectId)
    })
    this.componentDidMount();
  };


  render() {
    const { classes } = this.props;
    const { selected } = this.state;

    return (
      <Paper className={classes.root}>
        <TableToolbar 
        numSelected={selected.length} 
        projectId={selected[0]} 
        onDeleteClick={() => this.onDeleteClick()}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <ProjectTableHead
              numSelected={selected.length}
                 onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
                        />
            <TableBody>
              {this.state.data.map(project => {
                const isSelected = this.isSelected(project.projectId);
                return (
                  <TableRow
                    hover
                    onClick={event =>
                      this.handleClick(event, project.projectId)
                    }
                    role="checkbox"
                    tabIndex={-1}
                    key={project.projectId}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {project.projectName}
                    </TableCell>
                    <TableCell >{project.description}</TableCell>
                    <TableCell numeric>{project.startProjectDate}</TableCell>
                    <TableCell numeric>{project.endProjectDate}</TableCell>
                    <TableCell numeric>{(project.projectState===1)?("open"):("clouse")}</TableCell>
                    <TableCell numeric>{"000"}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
