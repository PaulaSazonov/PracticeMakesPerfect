import React from 'react';

const Filtteri = ({filter, handleFilterInput}) => {
    return(
        <div>
            <h4>Etsi hakusanalla:</h4>
            <input id="rajauskentta" value={filter} onChange={handleFilterInput}/>
        </div>
    )
}

export default Filtteri;