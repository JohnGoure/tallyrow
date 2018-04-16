import { NavLink } from 'react-router-dom'
import React from 'react'
import { MenuItem } from './MenuItem'

const link=""
const stats="Stats"

export const Menu = () => (
    <nav className='menu'>
        <MenuItem navlink="" title="Stats" />
        <MenuItem navlink="add-item" title="Add Item" />
        <MenuItem navlink="todolist" title="Todo List" />
    </nav>
)