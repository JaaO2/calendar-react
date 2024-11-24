import React, {useState, useEffect, useRef} from 'react'
import getPeoples from '../../functions/getPeoples';

function AddPerson(props : any) : JSX.Element {

    const [persons, setPersons] = useState<Person[]>([]);
    const selectRef = useRef<HTMLSelectElement>(null);
    const noAddedPersons = persons.filter((person : Person) => !props.addedPerson.find((addedPerson : Person) => addedPerson.id === person.id));

    useEffect(() => {
        const fetchData = async () : Promise<void> => {
            const data : Person[] = await getPeoples();
            setPersons(data);                
        };
        fetchData();
    }, []);

    const addPerson = () : void => {
        if (noAddedPersons.length === 0) return;
        const personId : number = parseInt(selectRef.current.value);
        const person : Person = persons.find((person : Person) => person.id === personId);
        if (props.addedPerson.find((person : Person) => person.id === personId)) return
        props.setAddedPerson([...props.addedPerson, person]);
    }

    const personMap : JSX.Element[] = noAddedPersons.map((person : Person) => {
        return <option value={person.id} key={person.id}>{person.username} - {person.description}</option>
    })
    
  return (
   <>
    <h4>Dodaj osoby</h4>
    <div className='addPerson'>
        <select name="person" id="person" ref={selectRef}>
            {personMap}
        </select>
        <button type="button" onClick={e => addPerson()}><span className="material-symbols-outlined">add</span></button>
    </div>
    <p className='error'>{props.error && props.error.message}</p>
   </>
  )
}

export default AddPerson
