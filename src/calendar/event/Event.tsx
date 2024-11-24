import React from 'react'

function Event(props : any) : JSX.Element {

  const textDecoration = props.event.cancelled ? "line-through" : "none";
  const color = props.event.cancelled ? "#666" : "#fff";
  return (
    <div style={{textDecoration: textDecoration, color: color}} onClick={e => props.setOpenDisplayEvent(props.event.id)} className="event">
        <p>{props.event.time_from.split(":")[0]}:{props.event.time_from.split(":")[1]} - {props.event.time_to.split(":")[0]}:{props.event.time_to.split(":")[1]}</p>
        <h3>{props.event.eventName}</h3>
        {props.event.description}
    </div>
  )
}

export default Event
