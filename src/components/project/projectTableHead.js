import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";


class ProjectTableHead extends React.Component {
    render() {
      const { onSelectAllClick, numSelected, rowCount } = this.props;
  
      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
            <TableCell >Project name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Start project date</TableCell>
            <TableCell>End project date</TableCell>
            <TableCell>Project status</TableCell>
            <TableCell>Count employee</TableCell>
          </TableRow>
        </TableHead>
      );
    }
  }
  
  ProjectTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired
  };

  export default ProjectTableHead
  