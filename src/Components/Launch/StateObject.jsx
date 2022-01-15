import React, {useState} from 'react';

const StateObject = ({state, onChange, image,width,height,marginTop,marginLeft}) => {

    return (
        <div
            style={{
        
                width: width,
                height: height,
            }}
            onClick={()=>onChange(!state)}
            
        >

<img
                style={{
                    width: '100%',
                    height: '100%',
                    marginTop:marginTop,
                    marginLeft:marginLeft,
                
                   

                }}
                src={image}
                />
        </div>
    )
};
export default StateObject;