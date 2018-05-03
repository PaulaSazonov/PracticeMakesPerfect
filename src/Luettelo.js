import React from 'react';

const Luettelo = (props) => {
    return (props.persons.map(person =>
        <li onClick={()=> props.delete(person.name)} key={person.name}> {person.name} {person.number} </li>))
}

export default Luettelo;