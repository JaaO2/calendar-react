import React from 'react'

function Person(props : any) : JSX.Element {

    const deletePerson = () : void => props.setAddedPerson(props.addedPerson.filter((person : Person) => person.id !== props.person.id));

  return (
    <div className="person" key={props.person.id}>
        <span onClick={deletePerson} className="deletePerson material-symbols-outlined">close</span>
        <p>{props.person.username} ({props.person.description})</p>
    </div>
  )
}

export default Person
