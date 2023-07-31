import React from 'react'
import TextField from "@mui/material/TextField";
const InputText = (props:any) => {
  return (
    <div>
       <TextField
            required
            id="filled-required"
            label="product name"
            variant="filled"
            value={props.value}
            onChange={props.click}
            style={{ margin: "10px" }}
          />
    </div>
  )
}

export default InputText
