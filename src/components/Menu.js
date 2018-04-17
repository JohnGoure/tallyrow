import React from 'react'
import { MenuItem } from './MenuItem'


export const Menu = () => (
    <nav className='menu'>
        <MenuItem row="row1" col="col1" navlink="stats" title="Stats" /> 
        <MenuItem row="row1" col="col2" navlink="add-item" title=" Add Item" />
        <MenuItem row="row1" col="col3" navlink="todolist" title=" Todo List" />
    </nav>
)