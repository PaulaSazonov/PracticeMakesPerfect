import React from 'react';

const Filtteri = ({filter, handleFilterInput}) => {
    return(
        <div>
            <h4>Rajaa näytettäviä:</h4>
            <input className="lisayskentta" value={filter} onChange={handleFilterInput}/>
        </div>
    )
}

export default Filtteri;