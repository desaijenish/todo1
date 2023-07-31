import React from 'react'
import Button from "@mui/material/Button";
interface Info{
  click:()=> void
}
const SubmiteButton = (props:Info) => {
  return (
    <div>
      <Button
          variant="outlined"
          onClick={props.click}
          style={{ margin: "10px" }}
        >
          submite
        </Button>
    </div>
  )
}

export default SubmiteButton
