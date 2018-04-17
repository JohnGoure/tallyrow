import React from 'react'
import { ToDoRow } from './ToDoRow'

export const ToDoList = (allListItems) => {
    return (
        <div className='todo-list'>
                <div className="row1 col1">
                To Do
                </div>
                <div className="row1 col2">
                Due
                </div>
                <div className="row1 col3">
                Complete
                </div>
        </div>
    )
}