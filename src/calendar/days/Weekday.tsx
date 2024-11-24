import React from 'react'
import Day from './Day';

function Weekday(props : any) : JSX.Element {
    const weekday : string = props.weekday;
    const dayArray : Date[] = props.dayArray;
    const date : Date = props.date;
    const dayArrayMap : JSX.Element[] = dayArray.map((day,i) => 
      <Day 
        setOpenForm = {props.setOpenForm} 
        day = {day} 
        key = {i} 
        date = {date}
        events = {props.events} 
        setOpenDisplayEvent = {props.setOpenDisplayEvent}
      />
    );

  return (
    <>
    <div className="weekday">
        <p>{weekday}</p>
        <div className="days">
            {dayArrayMap}
        </div>
    </div>
    </>
  )
}

export default Weekday
