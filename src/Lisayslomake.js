import React from 'react';

const Lisayslomake = (props) => {
    return (
        <div>
            <form onSubmit={props.addName}>
                Nimi: 
                <input className="lisayskentta" 
                value={props.newName} 
                onChange={props.handleNameChange}/>
                Numero:
                <input className="lisayskentta"
                value={props.newNumber} 
                onChange={props.handleNumberChange}/>
            <button id="nappi" type="submit">Lisää</button>
            </form>
        </div>
    )
}

export default Lisayslomake;