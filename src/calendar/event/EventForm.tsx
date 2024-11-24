import React, { useState, useRef, useEffect } from 'react'
import AddPerson from './AddPerson';
import PersonList from './PersonList';
import Input from '../inputs/Input';
import addEvent from '../../functions/addEvent';
import editEvent from '../../functions/editEvent';
function EventForm(props : any) : JSX.Element {

    const [addedPerson, setAddedPerson] = useState<Person[]>([]);
    const [errors, setErrors] = useState<AddEventResponseError[]>([]);

    const isEdit = !(props.openForm instanceof Date);

    const event : Event = isEdit && props.openForm;
    const date : Date = !isEdit ? props.openForm : new Date(event.date);
    const dateString : string = `${date.getFullYear()}-${(date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : (date.getMonth()+1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`

    const inputs : Input[] = [
        {name: "eventName", type: "text", placeholder: "Nazwa wydarzenia", ref: useRef(null), defaultValue: event?.eventName},
        {name: "description", type: "text", placeholder: "Opis", ref: useRef(null), defaultValue: event?.description},
        {name: "date", type: "date", placeholder: "Data", ref: useRef(null), defaultValue: dateString},
        {name: "time_from", type: "time", placeholder: "Godzina od", ref: useRef(null), defaultValue: event?.time_from},
        {name: "time_to", type: "time", placeholder: "Godzina do", ref: useRef(null), defaultValue: event?.time_to},
    ];

    useEffect(() => {    
        if (props.openForm instanceof Object) setAddedPerson(props.openForm.persons || []);
    }, [props.openForm]);

    const buttonRef = useRef<HTMLButtonElement>(null);

    const inputsMap : JSX.Element[] = inputs.map((input : Input) => {
        return <Input key={input.name} input={input} error={errors.find(error => error.field === input.name)}/>;
    });

    const addEventHandler = async (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) : Promise<void> => {
        setErrors([]);
        buttonRef.current.disabled = true;
        event.preventDefault();      
        event.stopPropagation();
        const data : Object = {};
        inputs.forEach(input => 
            data[input.name] = input.ref.current.value
        );
        data["persons"] = addedPerson.map((person : Person) => person.id);
        const result : AddEventResponse | AddEventResponseError[] = await addEvent(data);
        if (result instanceof Array) {
            setErrors(result);
            buttonRef.current.disabled = false;
        }
        else window.location.reload();
    };
    

    const editEventHandler  = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) : Promise<void> => {
        setErrors([]);      
        buttonRef.current.disabled = true;
        e.preventDefault();      
        e.stopPropagation();
        const data : Object = {};
        inputs.forEach(input => 
            data[input.name] = input.ref.current.value
        );
        data["id"] = event.id;
        data["persons"] = addedPerson.map((person : Person) => person.id);
        const result : AddEventResponse | AddEventResponseError[] = await editEvent(data);
        if (result instanceof Array) {
            setErrors(result);
            buttonRef.current.disabled = false;
        }
        else window.location.reload();
    };

    const header = (isEdit) ? "Edytuj wydarzenie" : "Dodaj wydarzenie";
    const buttonText = (isEdit) ? "Edytuj" : "Dodaj";
  return (
    <div className="EventForm">
        <span onClick={e => props.setOpenForm(false)} className="exit material-symbols-outlined">close</span>
        <h2>{header}</h2>
        <form>
            {inputsMap}
            <AddPerson addedPerson={addedPerson} setAddedPerson={setAddedPerson} error={errors.find(error => error.field === "persons")}/>
            <PersonList addedPerson={addedPerson} setAddedPerson={setAddedPerson}/>
            <button onClick={(isEdit) ? editEventHandler : addEventHandler} ref={buttonRef} type="submit">{buttonText}</button>
        </form>
    </div>
  )
}

export default EventForm
