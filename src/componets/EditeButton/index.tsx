import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

interface Info{
  click:()=> void
}
const EditeButton = (props:Info) => {

  return (

      <IconButton aria-label="edite" onClick={props.click}>
        <EditIcon fontSize="inherit" />
      </IconButton>

  );
};

export default EditeButton;
