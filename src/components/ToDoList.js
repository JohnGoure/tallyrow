import React from 'react'
import { ToDoRow } from './ToDoRow'
import PropTypes from 'prop-types'

export const ToDoList = (allListItems) => {
    return (
        <div className='todo-list'>
            <table>
                <thead>
                <tr>
                    <th>To Do |</th>
                    <th>Due |</th>
                    <th>Complete </th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}