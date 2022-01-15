import React, {useState} from 'react';
import s from './Launch.module.css'
import Position from "./Position";
import Tumbler from "./Tumbler";
import TumblerHorizon from "./TumblerHorizon";
import Tablo from "./Tablo";
import TabloCircle from "./TabloCircle";
import Strelka from "./Strelka";
import LaunchRy19 from './LaunchRy19';
import VintLeft from './VintLeft';
import LaunchAi24Left from './LaunchAi24Left';
import StateObject from './StateObject';
import Slider from 'react-input-slider';
import RydVsy from '../../Images/Ryd-Vsy.png';
import RydLeft from '../../Images/Ryd-Left.png';
import RydRight from '../../Images/Ryd-Right.png';
import Helper from './Helper';
import ControledStrelka from "./ControledStrelka";


const Launch = () => {


    const [state, setState] = useState({

        tumbler: false,
        tumblerLaunchCoolRy19: true,
        tumblerFireKranRy19: false,
        tumblerStvorkaRy19: false,
        tumblerRasxBakRight: false,
        tumblerRasxBakLeft: false,
        krishkaBasicTumblerRy19: false,
        checkfire: false,
        capRy19: true,
        launchRy19: false,
        launchAi24Left: false,
        launchAi24Right: false,
        krishkaLentaRy19: true,
        enginespeedRy19: false,
        enginetemperRy19: false,
        enginePreshOilRy19: false,
        enginePreshOilAi24Left: false,
        enginePreshOilAi24Right: false,
        engineTempOilRy19: false,
        engineTempOilAi24Left: false,
        engineTempOilAi24Right: false,
        enginePreshFuelRy19: false,
        enginePreshFuelAi24Left: false,
        enginePreshFuelAi24Right: false,
        engineTempAi24Left: false,
        engineIkmAi24Left: false,
        engineRotorAi24Left: false,
        engineRateFuelLeft: false,
        engineTempAi24Right: false,
        engineIkmAi24Right: false,
        engineRotorAi24Right: false,
        engineRateFuelRight: false,
        tumblerFireCranRight: false,
        tumblerFireCranLeft: false,
        tumblerPumpFirstRight: false,
        tumblerPumpSecondRight: false,
        tumblerPumpFirstLeft: false,
        tumblerPumpSecondLeft: false,
        tumblerStopCranLeft: false,
        tumblerStopCranRight:false,
        tumblerVintUpor: false,
        tumblerGroundAirAi24: false,
        tumblerPTR24Left: false,
        tumblerPTR24Right: false,
        tumblerLaunchEngineAi24: false,
        tumblerLaunchCoolAi24: true,
        tumblerLeafOilLeft: false,
        tumblerLeafOilRight: false,
        check: true,
        tabloLaunchLeft: true,
        tabloLaunchRight: true,
        tabloAPD: false,
        engineAmpermetr: false,
        engineVoltmetr: false,

        slider1: 100,
        slider2: 100,
        slider3: 100,

        fire:0,


    });



    return (
        <div className={s.fon}>
           


            <Position x={727} y={1050}>
                <StateObject
                    image={state.tumbler ? 'Tumbler-On.png' : 'Tumbler-Off.png'}
                    state={state.tumbler}
                    onChange={(value) => setState({...state, tumbler: value})}
                    width={6}
                    height={15}
                    marginTop={state.tumbler ? 10 : 21}
                />
            </Position>

            <Position x={303.5} y={1386}>
                <TumblerHorizon
                    state={state.tumblerLaunchCoolRy19}
                    onChange={(value) => setState({...state, tumblerLaunchCoolRy19: value})}
                />
            </Position>


            {/*                                   Пожарный кран Ру-19                                       */}
            <Position x={167} y={1339}>
                <TumblerHorizon
                    state={state.tumblerStvorkaRy19}
                    onChange={(value) => setState({...state, tumblerStvorkaRy19: value})}
                />
            </Position>

            <Position x={156.4} y={1336.8}> <TabloCircle state={state.tumblerStvorkaRy19} width={7}/> </Position>
            {/*                                   Пожарный кран Ру-19      Конец                           */}


            {/*                                   Створка Ру-19                                      */}
            <Position x={167} y={1364.7}>
                <TumblerHorizon
                    state={state.tumblerFireKranRy19}
                    onChange={(value) => setState({...state, tumblerFireKranRy19: value})}
                />
            </Position>

            <Position x={154.6} y={1362.5}> <TabloCircle state={state.tumblerFireKranRy19} width={6.8}/> </Position>
            {/*                                   Створка Ру-19      Конец                           */}


            {/*                                  Насосы правой группы                                      */}
            <Position x={923.4} y={932.6}>
                <Tumbler
                    state={state.tumblerRasxBakRight}
                    onChange={(value) => setState({...state, tumblerRasxBakRight: value})}
                />
            </Position>

            <Position x={915.3} y={921.4}> <TabloCircle state={state.tumblerRasxBakRight} width={8.8}/> </Position>

            <Position x={929} y={921.3}> <TabloCircle state={state.tumblerRasxBakRight} width={8.8}/> </Position>

            <Position x={943.4} y={932.6}>
                <Tumbler
                    state={state.tumblerPumpFirstRight}
                    onChange={(value) => setState({...state, tumblerPumpFirstRight: value})}
                />
            </Position>

            <Position x={942.4} y={921.3}> <TabloCircle state={state.tumblerPumpFirstRight} width={8.8}/> </Position>

            <Position x={902.4} y={932.6}>
                <Tumbler
                    state={state.tumblerPumpSecondRight}
                    onChange={(value) => setState({...state, tumblerPumpSecondRight: value})}
                />
            </Position>

            <Position x={901.4} y={921.3}> <TabloCircle state={state.tumblerPumpSecondRight}width={8.8}/></Position>
            {/*                                  Насосы правой группы      Конец                           */}


            {/*                                  Насосы левой группы                                 */}

            <Position x={841.9} y={932.6}>
                <Tumbler
                    state={state.tumblerRasxBakLeft}
                    onChange={(value) => setState({...state, tumblerRasxBakLeft: value})}
                />
            </Position>

            <Position x={834} y={921}> <TabloCircle state={state.tumblerRasxBakLeft} width={8.8}/></Position>

            <Position x={847} y={921}><TabloCircle state={state.tumblerRasxBakLeft} width={8.8}/></Position>

            <Position x={862.5} y={932.6}>
                <Tumbler
                    state={state.tumblerPumpFirstLeft}
                    onChange={(value) => setState({...state, tumblerPumpFirstLeft: value})}
                />
            </Position>

            <Position x={861} y={921}> <TabloCircle state={state.tumblerPumpFirstLeft} width={8.8}/></Position>

            <Position x={821} y={932.6}>
                <Tumbler
                    state={state.tumblerPumpSecondLeft}
                    onChange={(value) => setState({...state, tumblerPumpSecondLeft: value})}
                />
            </Position>

            <Position x={820} y={921}> <TabloCircle state={state.tumblerPumpSecondLeft} width={8.8}/> </Position>

            {/*                                  Насосы левой группы      Конец                           */}


            {/*                                 Пожарные краны                                 */}

            <Position x={864} y={870}>
                <Tumbler
                    state={state.tumblerFireCranLeft}
                    onChange={(value) => setState({...state, tumblerFireCranLeft: value})}
                />
            </Position>

            <Position x={863.5} y={858.7}> <TabloCircle state={state.tumblerFireCranLeft} width={8.8}/> </Position>

            <Position x={901} y={870}>
                <Tumbler
                    state={state.tumblerFireCranRight}
                    onChange={(value) => setState({...state, tumblerFireCranRight: value})}
                />
            </Position>

            <Position x={899.5} y={858.7}> <TabloCircle state={state.tumblerFireCranRight} width={8.8}/> </Position>

            {/*                                  Пожарные краны      Конец                           */}


            {/*                                  Панель Запуск Ру 19                                      */}

            <Position x={303} y={1339}>
                <TumblerHorizon
                    state={state.krishkaBasicTumblerRy19}
                    onChange={(value) => setState({...state, krishkaBasicTumblerRy19: value})}
                />
            </Position>

            <Position x={290} y={1330}>
                <StateObject
                    image={state.krishkaBasicTumblerRy19 ? 'Krishka-Horizon-On.png' : 'Krishka-Horizon-Off.png'}
                    state={state.krishkaBasicTumblerRy19}
                    onChange={(value) => setState({...state, krishkaBasicTumblerRy19: value})}
                    width={30}
                    height={13}
                    marginLeft={state.krishkaBasicTumblerRy19 ? -17 : 10}
                />
            </Position>

       {/*     <Position x={292} y={1397}>
                <StateObject
                    image={state.CapRy19 ? 'Cap-Ry19-On.png' : 'Cap-Ry19-Off.png'}
                    state={state.CapRy19 && state.CapRy19 === false}
                    onChange={(value) => setState({...state, CapRy19: value})}
                    width={15}
                    height={16}
                    marginTop={state.CapRy19 ? 14 : -40}
                />
    </Position> */}

            <Position x={296.8} y={1401.5}> <LaunchRy19 setState={setState} state={state}/> </Position>

            <Position x={475} y={946}> <TabloCircle state={state.launchRy19} width={8.8}/> </Position>

            <Position x={303} y={1370}>
                <TumblerHorizon
                    state={state.krishkaLentaRy19}
                    onChange={(value) => setState({...state, krishkaLentaRy19: value})}
                />
            </Position>


            <Position x={290} y={1362}>
                <StateObject
                    image={state.krishkaLentaRy19 ? 'Krishka-White-Horizon-On.png' : 'Krishka-White-Horizon-Off.png'}
                    state={state.krishkaLentaRy19}
                    onChange={(value) => setState({...state, krishkaLentaRy19: value})}
                    width={30}
                    height={13}
                    marginLeft={state.krishkaLentaRy19 ? -17 : 10}
                />
            </Position>


            <Position x={492} y={946}> <TabloCircle state={state.krishkaLentaRy19 === false && state.slider1>54} width={8.8}/> </Position>

            {/*                                  Панель Запуск Ру 19      Конец                           */}

            {/*                                  Панель Запуск АИ 24ВТ                                     */}
            <Position x={225} y={1376.5}>
                <TumblerHorizon
                    state={state.tumblerGroundAirAi24}
                    onChange={(value) => setState({...state, tumblerGroundAirAi24: value})}
                />
            </Position>


            <Position x={222} y={1360}>
                <TumblerHorizon
                    state={state.tumblerLaunchEngineAi24}
                    onChange={(value) => setState({...state, tumblerLaunchEngineAi24: value})}
                />
            </Position>

            <Position x={254.5} y={1380.8}>
                <TumblerHorizon
                    state={state.tumblerPTR24Left}
                    onChange={(value) => setState({...state, tumblerPTR24Left: value})}
                />
            </Position>

            <Position x={254.5} y={1348.5}>
                <TumblerHorizon
                    state={state.tumblerPTR24Right}
                    onChange={(value) => setState({...state, tumblerPTR24Right: value})}
                />
            </Position>


            <Position x={222} y={1343}>
                <TumblerHorizon
                    state={state.tumblerLaunchCoolAi24}
                    onChange={(value) => setState({...state, tumblerLaunchCoolAi24: value})}
                />
            </Position>


            <Position x={211} y={1368}>
                <StateObject
                    image={state.tumblerGroundAirAi24 ? 'Krishka-White-Horizon-On.png' : 'Krishka-White-Horizon-Off.png'}
                    state={state.tumblerGroundAirAi24}
                    onChange={(value) => setState({...state, tumblerGroundAirAi24: value})}
                    width={30}
                    height={13}
                    marginLeft={state.tumblerGroundAirAi24 ? -17 : 10}
                />
            </Position>


            <Position x={224} y={1401.5}> <LaunchAi24Left setState={setState} state={state} tumblerAi24={state.tumblerLaunchEngineAi24}/> </Position>
            {/*                                  Панель Запуск АИ 24 ВТ Конец                                     */}


            {/*                                  Проверка системы пожаротушения                                     */}

            <Position x={838.5} y={608}>
                <StateObject
                    image={state.checkfire ? 'Tumbler-On.png' : 'Tumbler-Center.png'}
                    // image={x==1?'img1':x==2?'img2':'img3'}
                    //image={`img${x}.png`}
                    state={state.checkfire}
                    onChange={(value) => setState({...state, checkfire: value})}
                    width={state.checkfire ? 2.5 : 2.5}
                    height={state.checkfire ? 7 : 2.5}
                    marginTop={state.checkfire ? -40 : 10}
                />
            </Position>

            <Position x={738.5} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={750.7} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={730.8} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={762.8} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={784} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={796.2} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={808.5} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={816} y={622.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={738.5} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={750.7} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={730.8} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={762.8} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={784} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={796.2} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={808.5} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>
            <Position x={816} y={629.8}> <TabloCircle state={state.checkfire} width={5.7}/> </Position>


            {/*                                 Проверка системы пожаротушения      Конец                           */}


            {/*                                 Стоп краны АИ-24ВТ                                     */}
            <Position x={709.25} y={1248}>
                <StateObject
                    image={state.tumblerStopCranLeft ? 'Stop-kran-on.png' : 'Stop-kran-left-off.png'}
                    state={state.tumblerStopCranLeft}
                    onChange={(value) => setState({...state, tumblerStopCranLeft: value})}
                    width={9}
                    height={27}
                    marginTop={state.tumblerStopCranLeft ? -40 : 10}
                />
            </Position>

            <Position x={726.25} y={1248}>
                <StateObject
                    image={state.tumblerStopCranRight ? 'Stop-kran-on.png' : 'Stop-kran-right-off.png'}
                    state={state.tumblerStopCranRight}
                    onChange={(value) => setState({...state, tumblerStopCranRight: value})}
                    width={9}
                    height={27}
                    marginTop={state.tumblerStopCranRight ? -40 : 10}
                />
            </Position>

            {/*                                 Стоп краны АИ-24ВТ        Конец                           */}


            {/*                                 Винт с упора АИ-24ВТ                                     */}


            <Position x={837} y={1248}>
                <StateObject
                    image={state.tumblerVintUpor ? 'Vint-Upor-Cap-On.png' : 'Vint-Upor-Cap-Off.png'}
                    state={state.tumblerVintUpor}
                    onChange={(value) => setState({...state, tumblerVintUpor: value})}
                    width={20}
                    height={25}
                    marginTop={state.tumblerVintUpor ? -40 : 10}
                />
            </Position>

            <Position x={599.5} y={769.5}> <TabloCircle state={state.tumblerVintUpor} width={8.8}/></Position>
            <Position x={619} y={769.5}> <TabloCircle state={state.tumblerVintUpor} width={8.8}/> </Position>
            {/*                                 Винт с упора АИ-24ВТ        Конец                           */}


            {/*                                  Стрелки запуска Ру19                                     */}

            <Position x={505.5} y={936}>
                <Strelka
                   image={'Arrow-Engine-Speed-Ry19.png'}
                    start={state.enginespeedRy19}
                    speed={0.25}
                    width={60}
                    max={96.5 }
                    timer={0}
                    value={state.enginespeedRy19?((state.slider1*-1)+100):0}
                    x={2.0}
                />
            </Position>

            <Position x={569.9} y={936}>
                <Strelka
                    image={'Arrow-Engine-Temper-Ry19.png'}
                    start={state.enginetemperRy19}
                    speed={1.0}
                    width={60}
                    max={230}
                    pointer={170}
                    timer={0}
                />
            </Position>

            <Position x={446.6} y={993.9}>
                <Strelka
                    image={'Arrow-Engine-PreshOil.png'}
                    start={state.enginePreshOilRy19}
                    speed={0.07}
                    width={30}
                    max={50}
                    pointer={0}
                    timer={0}
                />
            </Position>


            <Position x={461} y={977}>
                <Strelka
                    image={'Arrow-Engine-PreshFuel.png'}
                    start={state.enginePreshFuelRy19}
                    speed={0.05}
                    width={30}
                    max={20}
                    pointer={20}
                    timer={0}
                />
            </Position>

            <Position x={478.4} y={995}>
                <Strelka
                    image={'Arrow-Engine-TempOil.png'}
                    start={state.engineTempOilRy19}
                    speed={0.05}
                    width={30}
                    max={30}
                    pointer={30}
                    timer={0}
                />
            </Position>
            {/*                                 Стрелки запуска Ру19      Конец                           */}


            {/*                                  Стрелки запуска АИ24 ВТ ЛЕВЫЙ                                     */}

            <Position x={733.5} y={878.7}>
                <Strelka
                    image={'Arrow-Engine-TempOil.png'}
                    start={state.engineTempOilAi24Left}
                    speed={0.05}
                    width={30}
                    max={30}
                    pointer={30}
                    timer={0}
                />
            </Position>

            <Position x={715.3} y={860}>
                <Strelka
                    image={'Arrow-Engine-PreshFuel.png'}
                    start={state.enginePreshFuelAi24Left}
                    speed={0.05}
                    width={30}
                    max={20}
                    pointer={20}
                    timer={0}
                />
            </Position>

            <Position x={701} y={877.7}>
                <Strelka
                    image={'Arrow-Engine-PreshOil.png'}
                    start={state.enginePreshOilAi24Left}
                    speed={0.07}
                    width={30}
                    max={50}
                    pointer={0}
                    timer={0}
                />
            </Position>

            <Position x={745} y={929}>
                <Strelka
                    image={'Arrow-Engine-IKM-Ai24.png'}
                    start={state.engineIkmAi24Left}
                    speed={0}
                    width={25}
                    max={200}
                    pointer={200}
                    timer={0}
                />
            </Position>

            <Position x={634} y={925}>
                <Strelka
                    image={'Arrow-Engine-Temp-Ai24.png'}
                    start={state.engineTempAi24Left}
                    speed={0.6}
                    width={38}
                    max={200}
                    pointer={140}
                    timer={3000}
                />
            </Position>

            <Position x={643} y={979}>
                <Strelka
                    image={'Arrow-Engine-Rotor-Left-Ai24.png'}
                    start={state.engineRotorAi24Left}
                    speed={0.52}
                    width={45}
                    max={265}
                  //  pointer={250}
                    timer={4000}
                />
            </Position>

            <Position x={702.9} y={975.3}>
                <Strelka
                    image={'Strelka.png'}
                    start={state.engineRateFuelLeft}
                    speed={0.3}
                    width={60}
                    max={140}
                   // pointer={190}
                    timer={0}

                />
            </Position>

            <Position x={100} y={300}>
                <VintLeft
                    image={'vint.png'}
                    start={state.engineRotorAi24Left}
                    width={250}
                    speed={1}
                    timer={0}
                />
            </Position>

            <Position x={637.8} y={852}>

            <ControledStrelka
                    image={'Arrow-Uprt-Left.png'}
                    width={60}
                    value={(state.slider2*-1)+100}

               />

            </Position>
            {/*                                  Стрелки запуска АИ24 ВТ ЛЕВЫЙ            Конец                         */}


            {/*                                  Стрелки запуска АИ24 ВТ ПРАВЫЙ                                     */}
            <Position x={797.8} y={878.7}>
                <Strelka
                    image={'Arrow-Engine-TempOil.png'}
                    start={state.engineTempOilAi24Right}
                    speed={0.05}
                    width={30}
                    max={30}
                    pointer={30}
                    timer={0}
                />
            </Position>

            <Position x={779.3} y={860}>
                <Strelka
                    image={'Arrow-Engine-PreshFuel.png'}
                    start={state.enginePreshFuelAi24Right}
                    speed={0.05}
                    width={30}
                    max={20}
                    pointer={20}
                    timer={0}
                />
            </Position>

            <Position x={765} y={877.7}>
                <Strelka
                    image={'Arrow-Engine-PreshOil.png'}
                    start={state.enginePreshOilAi24Right}
                    speed={0.07}
                    width={30}
                    max={50}
                    pointer={0}
                    timer={0}
                />
            </Position>

            <Position x={779.5} y={929}>
                <Strelka
                    image={'Arrow-Engine-IKM-Ai24.png'}
                    start={state.engineIkmAi24Right}
                    speed={0}
                    width={25}
                    max={200}
                    pointer={200}
                    timer={0}
                />
            </Position>

            <Position x={694} y={925}>
                <Strelka
                    image={'Arrow-Engine-Temp-Ai24.png'}
                    start={state.engineTempAi24Right}
                    speed={0.6}
                    width={38}
                    max={200}
                    pointer={140}
                    timer={3000}
                />
            </Position>

            <Position x={643} y={979}>
                <Strelka
                    image={'Arrow-Engine-Rotor-Right-Ai24.png'}
                    start={state.engineRotorAi24Right}
                    speed={0.52}
                    width={45}
                    max={266}
                   // pointer={265}
                    timer={4000}
                />
            </Position>

            <Position x={770} y={975.3}>
                <Strelka
                    image={'Strelka.png'}
                    start={state.engineRateFuelRight}
                    speed={0.3}
                    width={60}
                    max={140}
                   // pointer={190}
                    timer={2000}

                />
            </Position>

            <Position x={1170} y={300}>
                <VintLeft
                    image={'vint.png'}
                    start={state.engineRotorAi24Right}
                    width={250}
                    speed={1}
                    timer={0}
                />
            </Position>

            <Position x={637.8} y={852}>

            <ControledStrelka
                    image={'Arrow-Uprt-Right.png'}
                    width={60}
                    value={(state.slider3*-1)+100}

               />

            </Position>
            {/*                                  Стрелки запуска АИ24 ВТ ПРАВЫЙ            Конец                         */}

            {/*                                  Заслонка маслорадиатора                                 */}


            <Position x={764} y={1050}>
                <StateObject
                    image={state.tumblerLeafOilLeft ? 'Tumbler-On.png' : 'Tumbler-Off.png'}
                    state={state.tumblerLeafOilLeft}
                    onChange={(value) => setState({...state, tumblerLeafOilLeft: value})}
                    width={6}
                    height={15}
                    marginTop={state.tumblerLeafOilLeft ? 10 : 21}
                />
            </Position>

            <Position x={789.5} y={1050}>
                <StateObject
                    image={state.tumblerLeafOilRight ? 'Tumbler-On.png' : 'Tumbler-Off.png'}
                    state={state.tumblerLeafOilRight}
                    onChange={(value) => setState({...state, tumblerLeafOilRight: value})}
                    width={6}
                    height={15}
                    marginTop={state.tumblerLeafOilRight ? 10 : 21}
                />
            </Position>

            <Position x={790} y={1143.5}>
                <Strelka
                    image={'Arrow-Leaf-Oil.png'}
                    start={state.tumblerLeafOilLeft}
                    speed={0.7}
                    width={16}
                    max={125}
                    pointer={125}
                    timer={0}

                />
            </Position>

            <Position x={809} y={1143.5}>
                <Strelka
                    image={'Arrow-Leaf-Oil.png'}
                    start={state.tumblerLeafOilRight}
                    speed={0.7}
                    width={16}
                    max={123}
                    pointer={123}
                    timer={0}

                />
            </Position>
            {/*                                  Заслонка маслорадиатора                    Конец             */}



            <Position x={810} y={1250}>
                <Slider
                    axis="y"
                    y={state.slider1}
                   
                    onChange={({y}) => setState(state => ({...state, slider1: y}))}
                    styles={{
                        track: {width: 4,height: 60,backgroundColor: "White"},
                        active: {backgroundColor: "Grey"},
                        thumb: {
                            backgroundImage: `url(${RydVsy})`,
                            width: 15,
                            height: 15,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'auto 100%',
                        }
                    }}
                />
            </Position>


            <Position x={767} y={1250}>
                <Slider
                    axis="y"
                    y={state.slider2}
                    onChange={({y}) => setState(state => ({...state, slider2: y}))}
                    styles={{
                        track: {width: 4,height: 70,backgroundColor: "White"},
                        active: {backgroundColor: "Grey"},
                        thumb: {
                            backgroundImage: `url(${RydLeft})`,
                            width: 15,
                            height: 15,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'auto 100%',
                        }
                    }}
                />
            </Position>

            <Position x={795} y={1250}>
                <Slider
                    axis="y"
                    y={state.slider3}
                    onChange={({y}) => setState(state => ({...state, slider3: y}))}
                    styles={{
                        track: {width: 4,height: 70,backgroundColor: "White"},
                        active: {backgroundColor: "Grey"},
                        thumb: {
                            backgroundImage: `url(${RydRight})`,
                            width: 15,
                            height: 15,
                            //position: "absolute",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'auto 100%',
                        }
                    }}
                />
            </Position>


            

            {/*                 КФЛ ПРАВЫЙ      */}
            <Position x={832.5} y={566.3}> <TabloCircle state={state.tabloLaunchRight} width={5.7}/> </Position>
            {/*                 КФЛ ЛЕВЫЙ      */}
            <Position x={714.5} y={566.3}> <TabloCircle state={state.tabloLaunchLeft} width={5.7}/> </Position>
            {/*                 ОТКАЗ ДВИГАТЕЛЯ ЛЕВЫЙ      */}
            <Position x={652} y={822.3}> <Tablo state={state.tabloLaunchLeft}/> </Position>
            {/*                 ОТКАЗ ДВИГАТЕЛЯ ПРАВЫЙ      */}
            <Position x={662} y={822.3}> <Tablo state={state.tabloLaunchRight}/> </Position>
            {/*                 АВАР ПИТ 27В      */}
            <Position x={763.5} y={822.3}> <Tablo state={state.check}/> </Position>
            {/*                 СТГ ЛЕВЫЙ     */}
            <Position x={719.5} y={822.3}> <Tablo state={state.tabloLaunchLeft}/> </Position>
            {/*                 СТГ ПРАВЫЙ     */}
            <Position x={729.5} y={822.3}> <Tablo state={state.tabloLaunchRight}/> </Position>

            <Position x={237.9} y={1391.9}><TabloCircle state={state.tabloAPD} width={7}/> </Position>

            <Position x={96} y={1215}>
                <Strelka
                    image={'Arrow-Engine-Ampermetr.png'}
                    start={state.engineAmpermetr}
                    speed={0.4}
                    width={25}
                    max={110}
                  //  pointer={110}
                    timer={0}
                />
            </Position>

            <Position x={85} y={1142.5}>
                <Strelka
                    image={'Arrow-Engine-Voltmeter.png'}
                    start={state.engineVoltmetr}
                    speed={0.3}
                    width={60}
                    max={70}
                    //pointer={70}
                    timer={0}
                />
            </Position>


        </div>
    );
}
export default Launch;