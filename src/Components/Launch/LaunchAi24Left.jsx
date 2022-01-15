import React, {useState} from 'react';

const LaunchAi24Left = ({state, setState,tumblerAi24}) => {
   const onChange=() => {
                        
                        
                        setState({...state, launchAi24Left: true})  
                        if(tumblerAi24===true&&state.tumblerRasxBakLeft===true&&state.tumblerFireCranLeft===true&&state.tumblerPumpFirstLeft===true&&state.tumblerPumpSecondLeft===true
                            &&state.tumblerStopCranLeft===true&&state.tumblerVintUpor===true&&state.tumblerGroundAirAi24===true&&state.tumblerPTR24Left===true&&state.tumblerLaunchCoolAi24===false
                            &&state.tumblerLeafOilLeft===true&&state.slider1<40) 
                       { setTimeout(() => setState({...state,engineTempAi24Left:true,engineIkmAi24Left:true,launchAi24Left:true,
                        engineRotorAi24Left:true,enginePreshOilAi24Left:true,enginePreshFuelAi24Left:true,
                        engineTempOilAi24Left:true,engineRateFuelLeft:true,tabloAPD:true,engineAmpermetr:true,engineVoltmetr:true}),5000)
                        setTimeout(() => setState({...state,launchAi24Left:true,tabloLaunchLeft:false,engineRotorAi24Left:true,enginePreshOilAi24Left:true,enginePreshFuelAi24Left:true,
                            engineTempOilAi24Left:true,engineRateFuelLeft:true,engineTempAi24Left:true,engineIkmAi24Left:true,tabloAPD:false,engineAmpermetr:false,engineVoltmetr:false}),20000)
                       }

                       if(tumblerAi24===false&&state.tumblerRasxBakRight===true&&state.tumblerFireCranRight===true&&state.tumblerPumpFirstRight===true&&state.tumblerPumpSecondRight===true
                       &&state.tumblerStopCranRight===true&&state.tumblerVintUpor===true&&state.tumblerGroundAirAi24===true&&state.tumblerPTR24Right===true&&state.tumblerLaunchCoolAi24===false
                        &&state.tumblerLeafOilRight===true&&state.slider1<40) 
                       { 

                            setTimeout(() => setState({...state,engineRotorAi24Right:true,engineTempAi24Right:true,engineIkmAi24Right:true,
                                enginePreshOilAi24Right:true,enginePreshFuelAi24Right:true,engineTempOilAi24Right:true,
                                engineRateFuelRight:true,tabloAPD:true,engineAmpermetr:true,engineVoltmetr:true}),5000)
                            setTimeout(() => setState({...state,engineRotorAi24Right:true,engineTempAi24Right:true,engineIkmAi24Right:true,
                                    enginePreshOilAi24Right:true,enginePreshFuelAi24Right:true,engineTempOilAi24Right:true,
                                    engineRateFuelRight:true,tabloLaunchRight:false,tabloAPD:false,engineAmpermetr:false,engineVoltmetr:false}),20000)
                                
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

export default LaunchAi24Left;