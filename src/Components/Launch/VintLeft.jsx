import React, {useEffect, useState} from 'react';

const VintLeft = ({image,start,speed,width,max,pointer,timer,setX}) => {
    const [deg, setDeg] = useState(0);
    const [acs, setAcs] = useState(0);
    const [shouldMove, setShouldMove] = useState(false);
    

    
    

    useEffect(()=>{
                if(start)
            {
               
                setDeg(0);
                setTimeout(()=>{setShouldMove(true)},0)
                
               
           
            }
            if(start===false)
            {
                setDeg(0);
                setTimeout(()=>{setShouldMove(false)});
                timer=0;
                speed=0;
                setAcs(0);

            }
        
    },[start])

    useEffect(()=>{
        
       
        if (shouldMove)
    { 
        setTimeout(()=>{
            setDeg(deg+speed+acs)
            if(acs<40)
            {
            setAcs(acs+0.25)
        
           
            }
            },50)
}
},[deg,shouldMove]);


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

export default VintLeft;