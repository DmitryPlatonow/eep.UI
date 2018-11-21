import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


class ProjectTableHead extends React.Component {
    render() {      
      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
            </TableCell>
            <TableCell>Employee</TableCell>
            <TableCell>Role In Project</TableCell>
            <TableCell numeric>Schedule</TableCell>
            <TableCell numeric>End project date</TableCell>
            <TableCell numeric>Project status</TableCell>
            <TableCell numeric>Count employee</TableCell>
          </TableRow>
        </TableHead>
      );
    }
  }

  export default ProjectTableHead