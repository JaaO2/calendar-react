import React from 'react'
import Person from './Person'

function PersonList(props : any) : JSX.Element {

  const personMap : JSX.Element[] =  props.addedPerson?.map((person : Person) => {
        return <Person person={person} key={person.id}  setAddedPerson={props.setAddedPerson} addedPerson={props.addedPerson}/>
    })

  return (
    <div className="PersonList">
        {personMap}
    </div>
  )
}

export default PersonList
