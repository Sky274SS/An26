import React, {useState} from 'react';

const Tumbler = ({state, onChange}) => {

    return (
        <div
            className={state?"Tumbler-on":"Tumbler-off"}
            onClick={()=>onChange(!state)}
        >

        </div>
    )
};

export default Tumbler;