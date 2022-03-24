import React from 'react'

function SquareComponent(props) {
    const classes = (props.className ? `${props.className} square` : `square`)
  return (
    <div className={classes} onClick={props.onClick}>
        {props.state}
    </div>
  )
}

export default SquareComponent