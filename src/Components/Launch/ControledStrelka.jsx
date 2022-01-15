import React, {useEffect, useState} from 'react';

const ControledStrelka = ({image,width, value}) => {
    const deg = value * 2.3



    return (
        <div style={{
        
            width: width,
            height: width,
        }}>
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    transform:`rotate(${deg}deg)`,

                }}
                src={image}
            />
        </div>
    )
};

export default ControledStrelka;