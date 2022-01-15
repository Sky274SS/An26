import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import F1 from './Components/F1(images)/F1';
import F2 from './Components/F2(navigationpanel)/F2';
import F3 from './Components/F3(workplace)/F3';
import Launch from './Components/Launch/Launch';
import F4 from'./Components/F4(tutorial)/F4';






const App = () =>{
  return (
    <BrowserRouter>
    <div className = "app-wrapper">
      
      <div className ="img">
       <F1/>
      </div>

      <div className ="nav">
       <F2/>
      </div>

      <div className ="otladka">
       Запуск Двигателей Ру-19А300 и Аи-24ВТ Самолёта Ан-26
      </div>

      <div className ="work">
       <Route path='/F3' component={F3}/>
       <Route path= '/Launch' component ={Launch}/>
       <Route path= '/F4' component ={F4}/>
       <Launch/>
      </div>

    </div>
    </BrowserRouter> 
  );
}

export default App;
