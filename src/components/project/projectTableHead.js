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
            <TableCell >Project name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell numeric>Start project date</TableCell>
            <TableCell numeric>End project date</TableCell>
            <TableCell numeric>Project status</TableCell>
            <TableCell numeric>Count employee</TableCell>
          </TableRow>
        </TableHead>
      );
    }
  }

  export default ProjectTableHead
  