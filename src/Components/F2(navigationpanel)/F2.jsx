import React from 'react';
import s from './F2.module.css'
import {NavLink} from "react-router-dom";

const F2 = () => {
return (
<nav className ={s.fon}>

<div className ={s.item}>
<NavLink to ="F3" activeClassName={s.activeLink}>Услуги</NavLink>
</div>
<div className ={s.item}>
<NavLink to ="F4" activeClassName={s.activeLink}>Обучение</NavLink>
</div>
<div className ={s.item}>
<NavLink to ="launch" activeClassName={s.activeLink}>Практика</NavLink>
</div>
</nav>
);
}
export default F2;