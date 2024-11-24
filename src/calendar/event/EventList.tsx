import React from 'react';
import Event from './Event';

function EventList(props: any): JSX.Element {
    const events : any = props.events;
    const eventsMap = events?.map((event: any) => {
        const date = new Date(event.date);
        if (
            date.getFullYear() === props.date.getFullYear() &&
            date.getMonth() === props.date.getMonth() &&
            date.getDate() === props.date.getDate()
        ) {
            return <Event key={event.id} event={event} setOpenDisplayEvent={props.setOpenDisplayEvent} />;
        }
    });

    return <div className="eventList">{eventsMap}</div>;
}

export default EventList;
