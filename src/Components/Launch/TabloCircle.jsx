import React, {useState} from 'react';

const TabloCircle = ({state,width}) => {

    return (
        <div
            className="TabloCircle"
            style={{
                width: width,
                height: width,
                background: state?'black':'black',
                opacity: state? '0':'0.5'
                
            }}
        >

        </div>
    )
};

export default TabloCircle;