import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItem } from './MenuItem'


export const Menu = () => (
    <nav className='menu'>
        <h3 className="row1 col1 logo"><NavLink to="/" className="logo">TallyRow</NavLink></h3>
        <MenuItem row="row1" col="col1" navlink="stats" title="Stats" /> 
        <MenuItem row="row1" col="col3" navlink="additem" title="+" />
        <MenuItem row="row1" col="col2" navlink="todolist" title="List" />
    </nav>
)