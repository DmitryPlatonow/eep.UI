import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Create from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

export const TableToolbar = props => {
  const { numSelected, projectId } = props;

  return (
    <Toolbar>
      <Tooltip title="Add">
        <IconButton aria-label="Add" component={Link} to="/project">
          <AddIcon />
        </IconButton>
      </Tooltip>
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="Delete" onClick={() => props.onDeleteClick()}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
      {numSelected === 1 ? (
        <Tooltip title="Edit">
          <IconButton
            aria-label="Edit"
            component={Link}
            to={"/project/" + projectId}
          >
            <Create />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};
