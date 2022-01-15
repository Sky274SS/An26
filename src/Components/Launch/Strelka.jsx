import React, {useEffect, useState} from 'react';

const Strelka = ({image,start,speed,width,max,pointer,timer,value=0,x=1}) => {
    const [deg, setDeg] = useState(0);
    const [shouldMove, setShouldMove] = useState(false);

    useEffect(()=>{
                if(start)
            {
                setDeg(0);
                setTimeout(()=>{setShouldMove(true)},timer)
            }
            if(start===false)
            {
                setDeg(0);
                setTimeout(()=>{setShouldMove(false)});
                pointer=0;
                max=0;
                timer=0;
                speed=0;

            }
           
    },[start])

    useEffect(()=>{
        if (deg<max&&shouldMove)
    { setTimeout(()=>{setDeg(deg+speed)},50)}
    },[deg,shouldMove,max]);



    return (
        <div style={{
        
            width: width,
            height: width,
        }}>
             
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    transform:`rotate(${deg>pointer?pointer*2-deg:deg+(value*x)}deg)`,

                }}
                src={image}
               
            />
           
        </div>
    )
};

export default Strelka;