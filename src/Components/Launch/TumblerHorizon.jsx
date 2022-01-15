import React, {useState} from 'react';

const TumblerHorizon = ({state, onChange}) => {

    return (
        <div
            className={state?"Tumbler-Horizon-on":"Tumbler-Horizon-off"}
            onClick={()=>onChange(!state)}
        >

        </div>
    )
};

export default TumblerHorizon;