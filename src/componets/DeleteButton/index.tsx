import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
 
interface Info{
  click:()=> void
}
const DeleteButton = (props:Info) => {
  return (

      <IconButton aria-label="delete" onClick={props.click}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      
  );
};

export default DeleteButton;
