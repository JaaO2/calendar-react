import React, { useState } from 'react'
import EventList from '../event/EventList';
import {isHoliday, getHolidaysInYear, getHolidayOnDate} from 'poland-public-holidays';

function Day (props : any) : JSX.Element {
  const day : Date = props.day;
  const today : Date = new Date();
  const date : Date = props.date;

  day.setHours(0,0,0,0);
  today.setHours(0,0,0,0);

  const isToday : Boolean = day.getTime() === today.getTime();
  const isSunday : Boolean = day.getDay() === 0;
  const isThisMonth : Boolean = date.getMonth() === day.getMonth();
  const holiday : any = getHolidayOnDate(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`);

  const addEvent = () : void => {
    props.setOpenForm(day);
  };

  const emptyDay : JSX.Element = <div className="day"></div>
  const className : string = `dayNumber ${isToday ? 'today' : ''} ${isSunday || holiday ?  'holiday' : ''}`
  const thisMonthDisplay : number | string = isThisMonth ? day.getDate() : " ";
  
  const dayElement : JSX.Element = (
    <div className="day">
    <p  onClick={e => addEvent()} className={className}>{thisMonthDisplay}</p>
    <p className="holiday">{isThisMonth ? holiday?.namePL : ""}</p>
    <EventList date={day} events={props.events} setOpenDisplayEvent={props.setOpenDisplayEvent}/>
    </div>
  )

  const result : JSX.Element = isThisMonth ? dayElement : emptyDay;

  return result
}

export default Day
