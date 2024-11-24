import React, { useState, useEffect } from 'react';
import EventForm from '../event/EventForm';
import Weekday from './Weekday';
import getUserEvents from '../../functions/getUserEvents';
import DisplayEvent from '../event/DisplayEvent';

function CalendarBox(props : any) : JSX.Element {
    const date : Date = props.date;
    const [firstDay, setFirstDay] = useState<Date>(new Date(date.getFullYear(), date.getMonth(), 1));
    const [lastDay, setLastDay] = useState<Date>(new Date(date.getFullYear(), date.getMonth() + 1, 0));
    const [dayArray, setDayArray] = useState<Date[]>([]);
    const [openForm, setOpenForm] = useState<boolean | Date | Event>(false);
    const [openDisplayEvent, setOpenDisplayEvent] = useState<boolean | number>(false);
    const [events, setEvents] = useState([]);
    const weekdays : string [] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

    useEffect(() : void => {
        setFirstDay(new Date(date.getFullYear(), date.getMonth(), 1));
        setLastDay(new Date(date.getFullYear(), date.getMonth() + 1, 0));
    }, [date]);


    useEffect(() : void => {
        let dayArrayTmp : Date[] = [];
        let day : Date = new Date(firstDay);
        const offset : number = (day.getDay() + 6) % 7;

        for (let i : number = 0; i < offset; i++) {
            const currentDay : Date = new Date(day.getTime());
            const previousDate : Date = new Date(currentDay.setDate(currentDay.getDate() - (i+1)))
            dayArrayTmp.push(previousDate);
        }

        while (day <= lastDay) {
            dayArrayTmp.push(new Date(day));
            day.setDate(day.getDate() + 1);
        }

        setDayArray(dayArrayTmp);

        const fetchData = async () => {
            const dates : Dates = {
                firstDay: firstDay,
                lastDay: lastDay
            };
            const data = await getUserEvents(dates);
            setEvents(data);
        };
        fetchData();
    }, [firstDay, lastDay]);

    const weekdaysMap : JSX.Element[] = weekdays.map((weekday, i) => 
            <Weekday 
                key={i} 
                weekday={weekday} 
                date = {date} 
                dayArray={dayArray.filter(day => (day.getDay() + 6) % 7 === i)}
                setOpenForm={setOpenForm}
                setOpenDisplayEvent={setOpenDisplayEvent} 
                events={events}
            />
        );
    const formDisplay : JSX.Element = openForm && <EventForm openForm={openForm} setOpenForm={setOpenForm} />;
    const eventDisplay : JSX.Element = openDisplayEvent && 
        <DisplayEvent 
            openDisplayEvent={openDisplayEvent} 
            setOpenDisplayEvent={setOpenDisplayEvent} 
            setOpenForm={setOpenForm}
            userInformation={props.userInformation}
        />

    return (
        <div className="CalendarBox">
            <div className="weekdays">
                {weekdaysMap}
            </div>
            {formDisplay}
            {eventDisplay}
        </div>
    );
}

export default CalendarBox;
