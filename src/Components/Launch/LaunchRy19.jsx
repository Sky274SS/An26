import React, {useState} from 'react';

const LaunchRy19 = ({state, setState}) => {
   const onChange=() => { 
       if(state.tumblerRasxBakRight===true && state.tumblerFireKranRy19===true && state.tumblerStvorkaRy19===true && state.tumblerLaunchCoolRy19===false
         && state.krishkaBasicTumblerRy19===true && state.krishkaLentaRy19===false)
       {
                        setState({...state, launchRy19: true})
                        
                        setTimeout(() => setState({...state,enginespeedRy19:true,launchRy19:true,enginetemperRy19:true,
                            enginePreshOilRy19:true,enginePreshFuelRy19:true,engineTempOilRy19:true}),1000)
                        setTimeout(() => setState({...state,enginespeedRy19:true,enginetemperRy19:true,
                            enginePreshOilRy19:true,enginePreshFuelRy19:true,engineTempOilRy19:true,launchRy19:false}),20000)
                        
       }
                    }

    return (
        <div
            className="LaunchRy19"s
            onClick={()=>onChange()}
        >

        </div>
    )
};

export default LaunchRy19;