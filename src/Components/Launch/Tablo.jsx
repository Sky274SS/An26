import React, {useState} from 'react';

const Tablo = ({state}) => {

    return (
        <div
            className="Tablo"
            style={{
                background: state?'black':'black',
                opacity: state? '0':'0.5'
            }}
        >

        </div>
    )
};

export default Tablo;