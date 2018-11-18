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
  state = {
    order: "asc",
    orderBy: "calories",
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 25
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.projectId) }));
      return;
    }
    this.setState({ selected: [] });
  };

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

  render() {
    const { classes } = this.props;
    const {  order, orderBy, selected } = this.state;

    return (
      <Paper className={classes.root}>
        <TableToolbar numSelected={selected.length} projectId={selected[0]} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <ProjectTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
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
                    <TableCell component="th" scope="row" padding="none">
                      {project.projectName}
                    </TableCell>
                    <TableCell numeric>{project.description}</TableCell>
                    <TableCell numeric>{project.startProjectDate}</TableCell>
                    <TableCell numeric>{project.endProjectDate}</TableCell>
                    <TableCell numeric>{project.projectState === 0 ? 14
                    : 2
    
                     
                      }</TableCell>
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
