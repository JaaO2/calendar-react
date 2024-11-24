import React, { useState, useEffect} from 'react'
import getEvent from '../../functions/getEvent';
import cancelEvent from '../../functions/cancelEvent';
import deleteEvent from '../../functions/deleteEvent';
import recancelEvent from '../../functions/recancelEvent';
function DisplayEvent(props : any) {
    const [event, setEvent] = useState<Event>({} as Event);
    const isCanceled : boolean = event?.cancelled;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEvent(props.openDisplayEvent);
            setEvent(data);
        };
        fetchData();
    }, [props.eventId]);

    const cancelEventHandler = async () => {
        cancelEvent(event.id);
        window.location.reload();
    }

    const editEventHandler = async () => {
        props.setOpenForm(event);
        props.setOpenDisplayEvent(null);
    }

    const deleteEventHandler = async () => {
        deleteEvent(event.id);
       window.location.reload();
    }

    const recancelEventHandler = async () => {
        recancelEvent(event.id);
        window.location.reload();
    }

    const cancelButtonText = isCanceled ? "Przywróć udział w wydarzeniu" : "Anuluj udział w wydarzeniu";
    const cancelButtonFunction = isCanceled ? recancelEventHandler : cancelEventHandler;

    const date = new Date(event.date);
    const dateString : string = `${date.getFullYear()}-${(date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : (date.getMonth()+1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`

    const personMap : JSX.Element[] = event.persons?.map((person : PersonEvent) => {
        const isCancelled = person.cancelled ? "line-through" : "none";
        return <p style={{textDecoration: isCancelled, fontWeight: isCancelled === "none" ? "bold" : "normal", color: isCancelled === "none" ? "white" : "grey"}} key={person.id}>{person.username} - {person.description}</p>
    })

    const editButton : JSX.Element = (event?.user?.id === props.userInformation.id) ? <button onClick={e => editEventHandler()}>Edytuj</button> : <></>;
    const deleteButton : JSX.Element = (event?.user?.id === props.userInformation.id) ? <button onClick={e => deleteEventHandler()}>Usuń</button> : <></>;

    const eventDisplay  : JSX.Element =     
        <div className="EventForm">
            <span onClick={e => props.setOpenDisplayEvent(false)} className="exit material-symbols-outlined">close</span>
            <h2>Podgląd wydarzenia</h2>
            <h3>{event.eventName}</h3>
            <p><strong>Opis:</strong> {event.description}</p>
            <p><strong>Autor:</strong> {event?.user?.username} - {event?.user?.description}</p>
            <p><strong>Data:</strong> {dateString}</p>
            <p><strong>Godziny:</strong> {event.time_from?.split(":")[0]}:{event.time_from?.split(":")[1]} - {event.time_to?.split(":")[0]}:{event.time_to?.split(":")[1]}</p>
            <p><strong>Osoby:</strong></p>
            {personMap}
            <button onClick={e => cancelButtonFunction()}>{cancelButtonText}</button>
            {editButton}
            {deleteButton}
        </div>
    const display = event != {} as Event ? eventDisplay : <div>Loading...</div>;

  return display;
}

export default DisplayEvent
