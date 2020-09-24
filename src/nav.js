import React from 'React';
import { NavLink } from 'react-router-dom';

//nav.js
const NavBar = () => (
    <div>
        <div>
            <NavLink exact to='/'>Jsdemoa</NavLink> |&nbsp;
            <NavLink to='/about'>about</NavLink> |&nbsp;
            <NavLink to='/topics'>topics</NavLink>
        </div>
    </div>
)
export default NavBar;